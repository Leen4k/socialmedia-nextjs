import { useCallback } from "react";

interface ModalProps{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: String;
    disabled?: boolean;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled}) => {
    const handleClose = useCallback(()=>{
        if (disabled){
            return;
        }
        onClose();

    },[disabled,onClose]);

    const handleSubmit = useCallback(() =>{
        if (disabled){

        }
        onSubmit();
    },[disabled,onSubmit]);

    if (!isOpen){
        return null;
    }
     
  return (
    <>
        <div 
        className="
            justify-center
            items-center
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800
            bg-opacity-70

        "
        >

        </div>
    </>
  )
}

export default Modal