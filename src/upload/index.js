import { Button, Divider, Form, Input, InputNumber } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = () => {};
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          rules={[{ required: true, message: "판메자 이름을 입력해 주세요" }]}
          label={<div className="upload-label">판매자 명</div>}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해 주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해 주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해 주세요"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해 주세요" }]}
        >
          <InputNumber
            className="upload-price"
            size="large"
            defaultValue={0}
          ></InputNumber>
        </Form.Item>
        <Divider />

        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개을 입력해 주세요" }]}
        >
          <Input.TextArea
            className="upload-price"
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품소개를 적어주세요"
          ></Input.TextArea>
        </Form.Item>

        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
