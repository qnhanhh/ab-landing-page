import {
  PopupButton,
  PopupContainer,
  PopupModal,
  PopupSubtitle,
  PopupTitle,
} from "./styles";

const Popup = () => {
  return (
    <PopupContainer>
      <PopupModal>
        <PopupTitle>
          Để nhận tài liệu MIỄN PHÍ, em hãy nhấp vào nút bên dưới để đăng ký
          thông tin
        </PopupTitle>
        <PopupSubtitle>100.000+ tài liệu full môn đã sẵn sàng</PopupSubtitle>
        <PopupButton
          target="_blank"
          href="https://mathpresso.typeform.com/to/efjNapK8"
        >
          Đăng ký nhận ngay
        </PopupButton>
      </PopupModal>
    </PopupContainer>
  );
};

export default Popup;
