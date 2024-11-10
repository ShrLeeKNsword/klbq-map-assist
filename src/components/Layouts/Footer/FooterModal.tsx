import { useState } from 'react'
import { Button, Modal } from '@douyinfe/semi-ui'

interface FooterPopupItemProps {
  icon?: JSX.Element
  title: string
  children: JSX.Element
}

const FooterModal: React.FC<FooterPopupItemProps> = ({ icon, title, children }) => {
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
      <Button onClick={showDialog} style={{ marginLeft: "10px" }}>{icon ? icon : <></>}{title}</Button>
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