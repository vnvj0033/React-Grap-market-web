import { Divider, Form, Input } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = () => {};
  return (
    <div>
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item name="upload">
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item>
          <Input size="large" placeholder="이름을 입력해 주세요" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
