
import { useState } from "react";

export default function useDisclosure(){

    const [ open, setOpen ] = useState(false);

    function onOpen(e?: any){
        setOpen( true );
    }

    function onClose( e?: any ){
        setOpen( false );
    }

    return {
        state: open,
        onOpen,
        onClose
    }

}