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
   const images=req.file.path
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

// get traval agecy Infomation

const getTravalAgency = async (req,res) => {

  try {
    const findAgencies= await AgencyDetails.find();
    if (findAgencies.length > 0) {
      const formattedAgency = findAgencies.map(agency=> ({
        id:agency._id,
        agencyName:agency.agencyName,
        description:agency.description,
        country:agency.country,
       city:agency.city,
       address:agency.address,
       website:agency.website,
       RegistrationNo:agency.RegistrationNo,
       licenceNo:agency.licenceNo,
        image:agency.image
        
      }));
      res.status(200).json({ message: "Traval Agency found", formattedAgency});
    } else {
      res.status(404).json({ message: "Traval Agency found" });
    }
  }catch(error){
    res.status(500).json({message:error.message})
  }
};

const getTravalAgencyById = async (req, res) => {
  try {
    const itemId = req.params.id;
    const findAgency= await AgencyDetails.findById(itemId);

    if (findAgency) {
      const formattedAgency = {
      
        agencyName:findAgency.agencyName,
        description:findAgency.description,
        country:findAgency.country,
       city:findAgency.city,
       address:findAgency.address,
       website:findAgency.website,
       RegistrationNo:findAgency.RegistrationNo,
       licenceNo:findAgency.licenceNo,
        image:findAgency.image
      };

      res.status(200).json({ message: "Traval Agency found", formattedAgency });
    } else {
      res.status(404).json({ message: "Traval Agency  not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports={upload,imageUpload,createTravalAgency, getTravalAgency, getTravalAgencyById}