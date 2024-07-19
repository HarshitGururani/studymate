import { Subjects } from "./models";
import { connectDb } from "./util";

export const getSemData = async (sem) => {
  try {
    connectDb();

    const skipCount = (sem - 1) * 4;
    const semData = await Subjects.find().skip(skipCount).limit(4);
    return semData;
  } catch (error) {
    throw new Error("Failed to fetch semester data");
  }
};

export const getSubjectData = async (id) => {
  try {
    await connectDb();
    const data = await Subjects.findById(id);
    return data;
  } catch (error) {
    throw new Error("Error while fetching the details");
  }
};
