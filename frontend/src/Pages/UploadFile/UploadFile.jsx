import "./UploadFile.css";
import { useState, useEffect, React } from "react";
import { useMoralis, useMoralisFile } from "react-moralis";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UploadFile = () => {
  let adharhash = "";
  let profilehash = "";
  let panhash = "";
  let marraigehash = "";
  let birthcerthash = "";
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { saveFile, moralisFile } = useMoralisFile();
  const [profkey, setprofkey] = useState("");
  const [adhkey, setadhkey] = useState("");
  const [pankey, setpankey] = useState("");
  const [markey, setmarkey] = useState("");
  const [birthkey, setbirthkey] = useState("");
  const [name, setname] = useState();
  const [lastName, setlastName] = useState();
  // const[adharhash,setAdharHash] = useState();
  const [eth, setEth] = useState();
  const [photoFile, setPhotoFile] = useState();
  const [photoFileName, setPhotoFileName] = useState();
  const metadata = {
    name: name,
    lastname: lastName,
  };

  const finalObj = {
    adharhash: adhkey,
    profilehash: profkey,
    panhash: pankey,
    marraigehash: markey,
    birthcerthash: birthkey,
  };

  console.log("final", finalObj);

  let jsonObject = {
    profilepic: profilehash,
    adharcard: adharhash,
    pancard: panhash,
    marraigecert: marraigehash,
    birthcert: birthcerthash,
  };

  useEffect(() => {
    if (user) {
      setEth(user.get("ethAddress"));
    }
  }, [user, profilehash]);
  const onChangePhoto = (e) => {
    setPhotoFile(e.target.files[0]);
    setPhotoFileName(e.target.files[0].name);
  };

  const onSubmitPhoto = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true, metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    profilehash = await fileIpfs._hash;
    // console.log(profilehash)
    jsonObject["profilepic"] = profilehash;
    setprofkey(fileIpfs._hash);
    console.log("Profile pic", jsonObject?.profilepic);
  };

  const onSubmitAdhar = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true, metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    adharhash = await fileIpfs._hash;
    // console.log(adharhash)
    jsonObject.profilepic = profilehash;
    jsonObject["adharcard"] = adharhash;
    setadhkey(fileIpfs._hash);
    console.log("Adharcard", jsonObject?.adharcard);
  };

  const onSubmitPan = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true, metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    panhash = await fileIpfs._hash;

    jsonObject["pancard"] = panhash;
    setpankey(fileIpfs._hash);
    console.log("Pancard", jsonObject?.pancard);
  };

  const onSubmitMarraige = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true, metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    marraigehash = await fileIpfs._hash;
    setmarkey(fileIpfs._hash);
    jsonObject["marraigecert"] = marraigehash;
    console.log("marraigecert", jsonObject?.marraigecert);
  };

  const onSubmitBirthCert = async (e) => {
    const file = photoFile;
    const name = photoFileName;
    let fileIpfs = await saveFile(name, file, { saveIPFS: true, metadata });
    user.set("profilePic", fileIpfs);
    await user.save();
    console.log(fileIpfs);
    // console.log(fileIpfs._hash)
    birthcerthash = await fileIpfs._hash;
    jsonObject["birthcert"] = birthcerthash;
    setbirthkey(fileIpfs._hash);
    console.log("birthcert", jsonObject?.birthcert);
  };

  if (!isAuthenticated) {
    return (
      <div className="button" style={{ marginTop: "60px" }}>
        <Button onClick={() => authenticate()} variant="outlined">
          <FingerprintIcon aria-label="fingerprint" color="primary" />
          Connect with Wallet
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("ethAddress")} 👋</h1>
      <div className="profile-pic-update-container">
        {isAuthenticated ? null : (
          <button onClick={() => authenticate()}>login</button>
        )}

        <form onSubmit={onSubmitPhoto}>
          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  <span style={{ color: "red" }}>*</span>
                  Fill Personal Information
                </label>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <input
                    className="text-field"
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <input
                    className="text-field"
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  <span style={{ color: "red" }}>*</span>
                  Select Profile Picture
                </label>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-file"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    id="profilePhoto"
                    onChange={onChangePhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-btn"
                    type="button"
                    value="Upload"
                    onClick={onSubmitPhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="text"
                    value={profkey ? profkey : "generating hash for you"}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  <span style={{ color: "red" }}>*</span>
                  Upload Adhar Card
                </label>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-file"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    id="profilePhoto"
                    onChange={onChangePhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="button"
                    value="Upload"
                    className="upload-btn"
                    onClick={onSubmitAdhar}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="text"
                    value={adhkey ? adhkey : "generating hash for you"}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  <span style={{ color: "red" }}>*</span>
                  Upload Pan Card
                </label>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-file"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    id="profilePhoto"
                    onChange={onChangePhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="button"
                    value="Upload"
                    className="upload-btn"
                    onClick={onSubmitPan}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="text"
                    value={pankey ? pankey : "generating hash for you"}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  <span style={{ color: "red" }}>*</span>
                  Upload Birth Certificate
                </label>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-file"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    id="profilePhoto"
                    onChange={onChangePhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="button"
                    value="Upload"
                    className="upload-btn"
                    onClick={onSubmitBirthCert}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="text"
                    value={birthkey ? birthkey : "generating hash for you"}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <label htmlFor="profilePhoto" className="">
                  Upload Marriage Certificate
                </label>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    className="upload-file"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    id="profilePhoto"
                    onChange={onChangePhoto}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="button"
                    value="Upload"
                    className="upload-btn"
                    onClick={onSubmitMarraige}
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <input
                    type="text"
                    value={markey ? markey : "generating hash for you"}
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
