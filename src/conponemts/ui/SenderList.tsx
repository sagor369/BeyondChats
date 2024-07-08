import { useGetAllChatsQuery } from "../../redux/api/BaseApi";
import SenderCard from "./SenderCard";

const SenderList = () => {
  const { data, isError, isLoading } = useGetAllChatsQuery(3889);
  console.log(data?.data);
  return (
    <div>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <div>
          {data?.data?.map((item:any) => (
            <SenderCard item={item}></SenderCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SenderList;
