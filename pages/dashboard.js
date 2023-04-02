import 'bootstrap/dist/css/bootstrap.css';
import Table from '../components/dashboard/Table';
import Header_Dash from '../components/dashboard/Header';
import PostForm from '../components/dashboard/post_job_form';
export default function Dashboard(){

  return (
    <>
    <Header_Dash></Header_Dash>
    <h1 style={{"textAlign":"center"}} >Job Proposals</h1>
    <Table></Table>
    <h1 style={{"textAlign":"center"}} >Job Post</h1>
    <PostForm></PostForm>
    </>
  );
}