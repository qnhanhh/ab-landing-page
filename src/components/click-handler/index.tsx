import { useSetRecoilState } from 'recoil';
import { modalOpenState } from '../../states';

const ClickHandler = ({ children }: { children: JSX.Element }) => {
  const setModalOpen = useSetRecoilState(modalOpenState);
  const setOpen = () => {
    setModalOpen(true);
  };

  return <div onClick={setOpen}>{children}</div>;
};

export default ClickHandler;
