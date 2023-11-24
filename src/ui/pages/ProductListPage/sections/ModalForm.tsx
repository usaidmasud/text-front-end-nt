"use client";
import { useAppSelector } from "@/utils/redux/hooks";
import { handleModal } from "@/utils/redux/slices/product.slice";
import { AppDispatch } from "@/utils/redux/store";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import FormSwitch from "../../components/FormSwitch";
import FormText from "../../components/FormText";
import FormUpload from "../../components/FormUpload";
import LookingForVariant from "../components/LookingForVariant";
import ModalHint from "../components/ModalHint";
interface ModalFormProps {}

function ModalForm({}: ModalFormProps) {
  const { showModal } = useAppSelector((state) => state.product);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Modal
      classNames={{}}
      title={false}
      maskClosable={false}
      open={showModal}
      footer={false}
      onCancel={() => dispatch(handleModal(false))}
    >
      <div className="mt-6">
        <h3 className="font-inter text-lg font-bold leading-[150%] tracking-[0.09px] text-center text-white mb-7">
          Add Menu
        </h3>
        <div className="lg:hidden flex justify-center -mt-4 mb-4">
          <ModalHint />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="col-span-2 :col-span-1">
            <FormInput label="Your product name" placeholder="Product name" />
          </div>
          <div className="col-span-2 :col-span-1">
            <FormInput label="Menu Code" placeholder="Menu code" />
          </div>
          <div className="col-span-2">
            <FormSelect label="Category" placeholder="Select category" />
          </div>
          <div className="col-span-2">
            <FormText
            required
              label="Tell me more about your product"
              placeholder="Product description"
            />
          </div>
          <div className="col-span-2 :col-span-1">
            <FormInput
            required
              prefix="NT$"
              type="number"
              label="Price"
              placeholder="Price"
            />
          </div>
          <div className="col-span-2 :col-span-1">
            <FormInput
              prefix="NT$"
              type="number"
              label="Discount price (optional)"
              placeholder="Discount price"
            />
          </div>
          <div className="col-span-2">
            <FormUpload required label="Upload" placeholder="Select file" />
          </div>
          <div className="col-span-2">
            <FormSwitch label="Enable Variant" />
          </div>
        </div>
        <div className="mt-5">
          <button className="font-poppins text-base font-medium leading-[143%] tracking-[0.04px] text-white py-2 px-3 rounded-md bg-button-gradient block w-full">
            Add product
          </button>
        </div>
      </div>
      {/* looking for variant */}
      <LookingForVariant />
    </Modal>
  );
}

export default ModalForm;
