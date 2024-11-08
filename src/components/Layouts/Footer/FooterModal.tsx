import { useState } from 'react'
import { Button, Modal } from '@douyinfe/semi-ui'
import { FaLink } from 'react-icons/fa6'

interface FooterPopupItemProps {
  title: string
  children: JSX.Element
}

const FooterModal: React.FC<FooterPopupItemProps> = ({title, children}) => {
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    console.log('Ok button clicked');
  };
  const handleCancel = () => {
    setVisible(false);
    console.log('Cancel button clicked');
  };
  const handleAfterClose = () => {
    console.log('After Close callback executed');
  };

  return (
    <>
      <Button onClick={showDialog} style={{ marginLeft: "10px" }}><FaLink style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "5px" }} />{title}</Button>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        afterClose={handleAfterClose} //>=1.16.0
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        <div>
          {children}
        </div>
      </Modal>
    </>
  );
};

export default FooterModal