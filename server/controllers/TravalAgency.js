const multer = require("multer");
const AgencyDetails = require("../model/TravalAgency");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// agency image uploading
const imageUpload = async (req, res) => {
  try {
    const imagePaths = req.files.map((file) => file.path);

    const newAgencyImage = new AgencyDetails({
      image: imagePaths,
    });

    const agencyImage = await newAgencyImage.save();
    console.log(agencyImage)
    if (agencyImage) {
      res
        .status(200)
        .json({
          message: "Files uploaded successfully",
          image: agencyImage.image,
        });
    } else {
      res
        .status(500)
        .json({ message: "Agency images not saved in the database" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
};

//create new TravalAgency
const createTravalAgency = async (req, res) => {
   const images=req.file.path;
  const {
    agencyName,
    description,
    country,
    city,
    address,
    website,
    registrationNo,
    licenceNo,

  } = req.body;

  const newTravalAgency=new AgencyDetails({
    agencyName,
    image:images,
    description,
    country,
    city,
    address,
    website,
    registrationNo,
    licenceNo,
   
  });

  const saveAgency=await newTravalAgency.save();

  if(saveAgency){
    res.status(200).json({message:"Trava Agency susccessfuly created",Agency:saveAgency});
  }else{
    res.status(401).json({message:"Can not create Traval Agency"});
  }
  try {
  } catch (error) {
    console.log("Internal server error")
    res.status(500).json({message:"Internal server error",error:error})
  }
};

module.exports={upload,imageUpload,createTravalAgency}