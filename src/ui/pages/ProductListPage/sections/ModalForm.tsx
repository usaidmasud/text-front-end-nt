"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { handleModal } from "@/utils/redux/slices/product.slice";
import { AppDispatch } from "@/utils/redux/store";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
interface ModalFormProps {}

function ModalForm({}: ModalFormProps) {
  const { showModal } = useAppSelector((state) => state.product);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Modal
      title="Add Product"
      maskClosable={false}
      open={showModal}
      onCancel={() => dispatch(handleModal(false))}
    >

        body disini
    </Modal>
  );
}

export default ModalForm;
