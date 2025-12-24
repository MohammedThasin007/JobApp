import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // only run if companyId exists
    if (!companyId) return;

    const fetchCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company)); // store one company
        }
      } catch (error) {
        console.log("Error fetching company by ID:", error);
      }
    };

    fetchCompany();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
