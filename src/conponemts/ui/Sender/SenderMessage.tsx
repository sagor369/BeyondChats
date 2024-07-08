
import { useParams } from "react-router-dom";
import MessageHeader from "./MessageHeader";
import Message from "./Message";

const SenderMessage = () => {
  const {id} = useParams()
  
  return (
    <div>
      <MessageHeader/>
      <Message></Message>

    </div>
  );
};

export default SenderMessage;
