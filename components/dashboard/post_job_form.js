function PostForm() {
    return ( <>
    
    <form>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputEmail4">Email</label>
      <input type="Job Title" class="form-control" id="jobtitle" placeholder="Enter Job Title"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Language</label>
      <select id="inputState" class="form-control">
        <option selected>English</option>
        <option>Urdu</option>
      </select>
    </div>
    <div class="form-group col-md-12">
      <label for="inputdesc">Job Description</label>
      <textarea name="post_desc" rows={4} cols={90} />
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Post Job</button>
</form>
    </> );
}

export default PostForm;