import { useParams } from 'solid-app-router';


const WithId = () => {
  const params = useParams();
  return (
    <div class="p-20">{params.id}</div>
  );
};

export default WithId;
