import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Popconfirm,
  Space,
  Table,
  Tag,
  Modal,
  Row,
  Col,
  Input,
  Form,
} from "antd";
import { Room } from "../../types/roomTypes";
import api from "../../../../utils/api-admin/ApiAdmin";

export default function QuanLyPhong() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [roomData, setRoomData] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
    },
    {
      title: "Số khách",
      dataIndex: "khach",
      key: "khach",
    },
    {
      title: "Phòng ngủ",
      dataIndex: "phongNgu",
      key: "phongNgu",
    },
    {
      title: "Giường",
      dataIndex: "giuong",
      key: "giuong",
    },
    {
      title: "Phòng tắm",
      dataIndex: "phongTam",
      key: "phongTam",
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Các tiện ích",
      key: "tienIch",
      render: (_: any, record: Room) => (
        <div>
          {renderTag("Máy giặt", record.mayGiat)}
          {renderTag("Bàn là", record.banLa)}
          {renderTag("TV", record.tivi)}
          {renderTag("Điều hòa", record.dieuHoa)}
          {renderTag("Wifi", record.wifi)}
          {renderTag("Bếp", record.bep)}
          {renderTag("Đỗ xe", record.doXe)}
          {renderTag("Hồ bơi", record.hoBoi)}
          {renderTag("Bàn ủi", record.banUi)}
        </div>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (hinhAnh: string) => (
        <img
          src={hinhAnh}
          alt="Hình ảnh phòng"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: Room) => (
        <Space size="middle">
          <Popconfirm
            title="Xoá phòng"
            description="Bạn có chắc chắn sẽ xoá phòng này?"
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

  const renderTag = (text: string, value: boolean) => (
    <Tag color={value ? "success" : "default"}>{text}</Tag>
  );

  const handleSubmitForm = () => {
    form.validateFields().then((values) => {
      const data = {
        ...values,
        giaTien: values.giaTien,
      };

      if (isUpdating && selectedRoom) {
        api
          .put(`/phong-thue/${selectedRoom.id}`, data)
          .then(() => {
            fetchRoomData();
            setIsUpdating(false);
            setSelectedRoom(null);
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error updating room", error));
      } else {
        api
          .post("/phong-thue", data)
          .then(() => {
            fetchRoomData();
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error adding room", error));
      }
    });
  };

  const handleDelete = (roomId: number) => {
    api
      .delete(`/phong-thue/${roomId}`)
      .then(() => {
        fetchRoomData();
      })
      .catch((err) => {
        console.error("Failed to delete room", err);
      });
  };

  const fetchRoomData = () => {
    api
      .get("/phong-thue")
      .then((res) => {
        setLoading(false);
        setRoomData(res.data.content);
      })
      .catch((err) => {
        console.error("Failed to fetch room data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRoomData();
  }, []);

  const handleUpdate = (room: Room) => {
    setSelectedRoom(room);
    form.setFieldsValue({
      ...room,
      giaTien: room.giaTien,
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
              title: "Quản lý phòng",
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
          Thêm phòng
        </Button>
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách phòng</h4>
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"id"}
          dataSource={roomData}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
          loading={loading}
        />
      </div>
      <Modal
        title={isUpdating ? "Cập nhật phòng" : "Thêm phòng"}
        centered
        visible={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <Form form={form} className="mt-4" onFinish={handleSubmitForm}>
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <label className="text-sm">Tên phòng</label>
              <Form.Item
                name="tenPhong"
                rules={[
                  { required: true, message: "Tên phòng không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Tên phòng" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Số khách</label>
              <Form.Item
                name="khach"
                rules={[
                  { required: true, message: "Số khách không được để trống" },
                ]}
              >
                <Input
                  type="number"
                  size="large"
                  className="mt-1"
                  placeholder="Số khách"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Phòng ngủ</label>
              <Form.Item
                name="phongNgu"
                rules={[
                  { required: true, message: "Phòng ngủ không được để trống" },
                ]}
              >
                <Input
                  type="number"
                  size="large"
                  className="mt-1"
                  placeholder="Phòng ngủ"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Giường</label>
              <Form.Item
                name="giuong"
                rules={[
                  { required: true, message: "Giường không được để trống" },
                ]}
              >
                <Input
                  type="number"
                  size="large"
                  className="mt-1"
                  placeholder="Giường"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Phòng tắm</label>
              <Form.Item
                name="phongTam"
                rules={[
                  { required: true, message: "Phòng tắm không được để trống" },
                ]}
              >
                <Input
                  type="number"
                  size="large"
                  className="mt-1"
                  placeholder="Phòng tắm"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Giá tiền</label>
              <Form.Item
                name="giaTien"
                rules={[
                  { required: true, message: "Giá tiền không được để trống" },
                ]}
              >
                <Input
                  type="number"
                  step="0.01"
                  size="large"
                  className="mt-1"
                  placeholder="Giá tiền"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Máy giặt</label>
              <Form.Item name="mayGiat" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Bàn là</label>
              <Form.Item name="banLa" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">TV</label>
              <Form.Item name="tivi" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Điều hòa</label>
              <Form.Item name="dieuHoa" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Wifi</label>
              <Form.Item name="wifi" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Bếp</label>
              <Form.Item name="bep" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Đỗ xe</label>
              <Form.Item name="doXe" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Hồ bơi</label>
              <Form.Item name="hoBoi" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Bàn ủi</label>
              <Form.Item name="banUi" valuePropName="checked">
                <input type="checkbox" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Mô tả</label>
              <Form.Item
                name="moTa"
                rules={[
                  { required: true, message: "Mô tả không được để trống" },
                ]}
              >
                <Input.TextArea
                  size="large"
                  className="mt-1"
                  placeholder="Mô tả"
                />
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
                <Input
                  size="large"
                  className="mt-1"
                  placeholder="Link hình ảnh"
                />
              </Form.Item>
            </Col>
            <Col span={24} className="text-end">
              <Button htmlType="submit" size="large" type="primary">
                {isUpdating ? "Cập nhật phòng" : "Thêm phòng"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
