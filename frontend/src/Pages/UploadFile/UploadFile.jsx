import "./UploadFile.css";
import { useState , useEffect , React} from "react";
import { useMoralis, useMoralisFile } from "react-moralis";

const UploadFile = () => {
  let adharhash = ""
  let profilehash = ""
  let panhash = ""
  let marraigehash = ""
  let birthcerthash = ""
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { saveFile, moralisFile } = useMoralisFile();
  const [name,setname] = useState();
  const[lastName,setlastName] = useState();
  // const[adharhash,setAdharHash] = useState();
  const[eth,setEth] = useState();
  const [photoFile, setPhotoFile] = useState();
  const [photoFileName, setPhotoFileName] = useState();
  const metadata = {
    name: name,
    lastname: lastName 
  }

  let jsonObject =  {
    "profilepic": profilehash,
    "adharcard":adharhash,
    "pancard":panhash,
    "marraigecert": marraigehash,
    "birthcert":birthcerthash
  }

 

  useEffect(() => {
    if (user) {
      setEth(user.get("ethAddress"))
    }
  }, [user]);

  const onChangePhoto = (e) => {
    setPhotoFile(e.target.files[0]);
    setPhotoFileName(e.target.files[0].name);
  };



  

  const onSubmitPhoto = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    profilehash = await fileIpfs._hash
    // console.log(profilehash)
    jsonObject['profilepic']= profilehash
    console.log('Profile pic',jsonObject?.profilepic)
  };

  
  const onSubmitAdhar = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    adharhash = await fileIpfs._hash
    // console.log(adharhash)
     jsonObject.profilepic = profilehash
     jsonObject['adharcard'] = adharhash
     console.log('Adharcard',jsonObject?.adharcard)

     
  };

  const onSubmitPan = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    panhash = await fileIpfs._hash
    
     jsonObject['pancard'] = panhash
     console.log('Pancard',jsonObject?.pancard) 
  };

  const onSubmitMarraige = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    marraigehash = await fileIpfs._hash
    
     jsonObject['marraigecert'] = marraigehash
     console.log('marraigecert',jsonObject?.marraigecert)

     
  };

  const onSubmitBirthCert = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true,metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    birthcerthash = await fileIpfs._hash
    
     jsonObject['birthcert'] = birthcerthash
     console.log('birthcert',jsonObject?.birthcert)

     
  };



 


  if(!isAuthenticated){
    return (
      <div>
      <button onClick={() => authenticate()}>Authenticate</button>
    </div>
    )
  }

return (
  <div>
    <h1>Welcome {user.get("ethAddress")}</h1>\
    <div className="profile-pic-update-container">
    {isAuthenticated ? null : <button onClick={() => authenticate()}>login</button> }
      
      <form onSubmit={onSubmitPhoto}>
        <div className="mb-3">
          <label htmlFor="profilePhoto" className="form-label">
            Select a Profile Pic
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
        </div>
        <input
          type="text"
          placeholder='Enter name'
          onChange={(e) => {setname(e.target.value)}}
        />
         <input
          type="text"
          placeholder='Enter Last Name'
          onChange={(e) => {setlastName(e.target.value)}}
        />
        <input
          type="button"
          value="Upload"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitPhoto}
        />
        <div>
        <label htmlFor="profilePhoto" className="form-label">
            Upload Adhar Card
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
          <input
          type="button"
          value="Upload"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitAdhar}
        />
          
        </div>
        <div>
        <label htmlFor="profilePhoto" className="form-label">
            Upload Pan Card
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
          <input
          type="button"
          value="Next"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitPan}
        />
          
        </div>

        <div>
        <label htmlFor="profilePhoto" className="form-label">
            Upload Marraige Certificate
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
          <input
          type="button"
          value="Next"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitMarraige}
        />
          
        </div>

        <div>
        <label htmlFor="profilePhoto" className="form-label">
            Upload Birth Certificate
          </label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            id="profilePhoto"
            onChange={onChangePhoto}
          />
          <input
          type="button"
          value="Next"
          className="btn btn-primary btn-block mt-1"
          onClick={onSubmitBirthCert}
        />
          
        </div>
      </form>
    </div>


  </div>

 

)  
};

export default UploadFile;
