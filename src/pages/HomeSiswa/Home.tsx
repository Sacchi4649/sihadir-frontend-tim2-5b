import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout } from "antd";
// import { LOCALSTORAGE_KEY } from "../../constants";
// import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";

const HomeSiswa = ({ }: any) => {
  // const { getLocalStorage } = localStorageHooks();
  return (
    <div>
      <Layout className="content-layout">

        <div className='bg-white mb-3 p-10 flex space-x-4 items-center '>
          <Avatar size={100} icon={<UserOutlined />} />
          <div className='flex flex-col space-y-4'>
              {/* <span className='text-3xl font-bold pt-2'>{getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}</span>
              <span className='text-3xl font-bold pb-2'>{getLocalStorage(LOCALSTORAGE_KEY.ROLE)}</span> */}
              <span className='text-3xl font-bold pt-2'><p> HARIS </p></span>
              <span className='text-3xl font-bold pb-2'><p> 3202116065001 </p></span>

          </div>
        </div>

      </Layout>
    </div>
  );
};


export default HomeSiswa;
// {getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}