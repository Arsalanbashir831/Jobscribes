import Btngrp from "./btngrp";


export default function Table() {
    return ( <>
    
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Job Title</th>
      <th scope="col">Email</th>
      <th  scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><Btngrp></Btngrp></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>@fat</td>
      <td>@fat</td>
      <td><Btngrp></Btngrp></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td><Btngrp></Btngrp></td>
    </tr>
  </tbody>
</table>
    
    </> );
}

