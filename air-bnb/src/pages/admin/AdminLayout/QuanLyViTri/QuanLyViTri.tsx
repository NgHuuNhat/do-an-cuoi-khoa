import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Popconfirm,
  Space,
  Table,
  Modal,
  Row,
  Col,
  Input,
  Form,
} from "antd";
import { ViTri } from "../../types/localType";
import api from "../../../../utils/api-admin/ApiAdmin";

export default function QuanLyViTri() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viTriData, setViTriData] = useState<ViTri[]>([]);
  const [selectedViTri, setSelectedViTri] = useState<ViTri | null>(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên vị trí",
      dataIndex: "tenViTri",
      key: "tenViTri",
    },
    {
      title: "Tỉnh thành",
      dataIndex: "tinhThanh",
      key: "tinhThanh",
    },
    {
      title: "Quốc gia",
      dataIndex: "quocGia",
      key: "quocGia",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (hinhAnh: string) => (
        <img src={hinhAnh} alt="hinhAnh" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: ViTri) => (
        <Space size="middle">
          <Popconfirm
            title="Xoá vị trí"
            description="Bạn có chắc chắn sẽ xoá vị trí này?"
            onConfirm={() => handleDelete(record.id)}
            okText="OK"
            cancelText="Huỷ"
          >
            <Button danger>Xoá</Button>
          </Popconfirm>
          <Button type="default" onClick={() => handleUpdate(record)}>
            Cập nhật
          </Button>
        </Space>
      ),
    },
  ];

  const handleSubmitForm = () => {
    form.validateFields().then((values) => {
      const data = {
        ...values,
      };

      if (isUpdating && selectedViTri) {
        api
          .put(`/vi-tri/${selectedViTri.id}`, data)
          .then(() => {
            fetchViTriData();
            setIsUpdating(false);
            setSelectedViTri(null);
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error updating vị trí", error));
      } else {
        api
          .post("/vi-tri", data)
          .then(() => {
            console.log("data",data)
            fetchViTriData();
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error adding vị trí", error));
      }
    });
  };

  const handleDelete = (viTriId: number) => {
    api
      .delete(`/vi-tri/${viTriId}`)
      .then(() => {
        fetchViTriData();
      })
      .catch((err) => {
        console.error("Failed to delete vị trí", err);
      });
  };

  const fetchViTriData = () => {
    api
      .get("/vi-tri")
      .then((res) => {
        setLoading(false);
        setViTriData(res.data.content);
      })
      .catch((err) => {
        console.error("Failed to fetch vị trí data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchViTriData();
  }, []);

  const handleUpdate = (viTri: ViTri) => {
    setSelectedViTri(viTri);
    form.setFieldsValue({
      ...viTri,
    });
    setIsUpdating(true);
    setIsOpenModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
              path: "/admin",
            },
            {
              title: "Quản lý vị trí",
            },
          ]}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Thêm vị trí
        </Button>
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách vị trí</h4>
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"id"}
          dataSource={viTriData}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
          scroll={{ x: 1280 }}
          loading={loading}
        />
      </div>
      <Modal
        title={isUpdating ? "Cập nhật vị trí" : "Thêm vị trí"}
        centered
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <Form form={form} className="mt-4" onFinish={handleSubmitForm}>
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <label className="text-sm">Tên vị trí</label>
              <Form.Item
                name="tenViTri"
                rules={[
                  { required: true, message: "Tên vị trí không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Tên vị trí" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Tỉnh thành</label>
              <Form.Item
                name="tinhThanh"
                rules={[
                  { required: true, message: "Tỉnh thành không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Tỉnh thành" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Quốc gia</label>
              <Form.Item
                name="quocGia"
                rules={[
                  { required: true, message: "Quốc gia không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Quốc gia" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Hình ảnh</label>
              <Form.Item
                name="hinhAnh"
                rules={[
                  { required: true, message: "Hình ảnh không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Hình ảnh" />
              </Form.Item>
            </Col>
            <Col span={24} className="text-end">
              <Button htmlType="submit" size="large" type="primary">
                {isUpdating ? "Cập nhật vị trí" : "Thêm vị trí"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}


