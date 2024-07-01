import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  // Pagination,
  Popconfirm,
  Space,
  Table,
  Tag,
  Modal,
  Row,
  Col,
  Input,
  Radio,
  DatePicker,
  Form,
} from "antd";
import { User } from "../../types/userTypes";
import moment from "moment";
import api from "../../../../utils/api-admin/ApiAdmin";

export default function QuanLyNguoiDung() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [form] = Form.useForm();
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (gender: boolean) => (gender ? "Nam" : "Nữ"),
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role: string) =>
        role === "USER" ? (
          <Tag color="default">Khách hàng</Tag>
        ) : (
          <Tag color="success">Quản Trị</Tag>
        ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: User) => (
        <Space size="middle">
          <Popconfirm
            title="Xoá người dùng"
            description="Bạn có chắc chắn sẽ xoá người dùng này?"
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
        birthday: moment(values.birthday).format("DD/MM/YYYY"),
      };

      if (isUpdating && selectedUser) {
        api
          .put(`/users/${selectedUser.id}`, data)
          .then(() => {
            fetchUserData();
            setIsUpdating(false);
            setSelectedUser(null);
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error updating user", error));
      } else {
        api
          .post("/users", data)
          .then(() => {
            fetchUserData();
            form.resetFields();
            setIsOpenModal(false);
          })
          .catch((error) => console.error("Error adding user", error));
      }
    });
  };

  const handleDelete = (userId: number) => {
    api
      .delete(`/users?id=${userId}`)
      .then(() => {
        fetchUserData();
      })
      .catch((err) => {
        console.error("Failed to delete user", err);
      });
  };

  const handleUpdate = (user: User) => {
    setSelectedUser(user);
    form.setFieldsValue({
      ...user,
      birthday: moment(user.birthday),
    });
    setIsUpdating(true);
    setIsOpenModal(true);
  };

  const handleSearch = (value: string) => {
    fetchUserData(value);
    const lowerCaseValue = value.toLowerCase();
    const filteredUsers = userData.filter((user) =>
      user.name.toLowerCase().includes(lowerCaseValue)
    );
    setFilteredUserData(filteredUsers);
  };


  const fetchUserData = (query = "") => {
    const url = query ? `/users/search/${query.toLowerCase()}` : "/users";
    api
      .get(url)
      .then((res) => {
        setLoading(false);
        setUserData(res.data.content);
        setFilteredUserData([]); 
      })
      .catch((err) => {
        console.error("Failed to fetch user data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
              title: "Quản lý người dùng",
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
          Thêm quản trị viên
        </Button>
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách người dùng</h4>
        <Input.Search
          placeholder="Nhập từ khóa tìm kiếm"
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          style={{ width: 400, marginBottom: 16 }}
          onSearch={handleSearch}
        />
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"id"}
          dataSource={filteredUserData.length > 0 ? filteredUserData : userData}
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
        title={isUpdating ? "Cập nhật người dùng" : "Thêm quản trị viên"}
        centered
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={null}
      >
        <Form form={form} className="mt-4" onFinish={handleSubmitForm}>
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <label className="text-sm">Họ tên</label>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Họ tên không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Họ tên" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Email</label>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email không được để trống" },
                ]}
              >
                <Input size="large" className="mt-1" placeholder="Email" />
              </Form.Item>
            </Col>
            {!isUpdating && (
              <Col span={24}>
                <label className="text-sm">Mật khẩu</label>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Mật khẩu không được để trống" },
                  ]}
                >
                  <Input.Password size="large" placeholder="Mật khẩu" />
                </Form.Item>
              </Col>
            )}
            <Col span={24}>
              <label className="text-sm">Số điện thoại</label>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại không được để trống",
                  },
                ]}
              >
                <Input
                  size="large"
                  className="mt-1"
                  placeholder="Số điện thoại"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Ngày sinh</label>
              <Form.Item
                name="birthday"
                rules={[
                  { required: true, message: "Ngày sinh không được để trống" },
                ]}
              >
                <DatePicker
                  className="mt-1 w-full"
                  size="large"
                  placeholder="Chọn ngày"
                  format={"DD/MM/YYYY"}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Giới tính</label>
              <Form.Item
                name="gender"
                rules={[
                  { required: true, message: "Giới tính không được để trống" },
                ]}
              >
                <Radio.Group>
                  <Radio value={true}>Nam</Radio>
                  <Radio value={false}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24}>
              <label className="text-sm">Vai trò</label>
              <Form.Item
                name="role"
                rules={[
                  { required: true, message: "Vai trò không được để trống" },
                ]}
              >
                <Radio.Group>
                  <Radio value={"USER"}>Khách hàng</Radio>
                  <Radio value={"ADMIN"}>Quản trị</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={24} className="text-end">
              <Button htmlType="submit" size="large" type="primary">
                {isUpdating ? "Cập nhật người dùng" : "Thêm quản trị viên"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
