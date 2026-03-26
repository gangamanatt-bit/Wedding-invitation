import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import Template4 from "../components/Template4";
import Template5 from "../components/Template5";
import Template6 from "../components/Template6";
import "../styles/Formpage.css";

function FormPage() {


  const navigate = useNavigate();
  const { templateId } = useParams();
  const id = Number(templateId);


  const validationSchema = Yup.object({
    bride: Yup.string().required("Required"),
    groom: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    venue: Yup.string().required("Required"),
  });

  return (

    <Formik
      initialValues={{
    bride: "",
    groom: "",
    date: "",
    time: "",
    venue: "",
    inviteLine: "Together with their families",
    requestLine: "request the pleasure of your presence"
  }}
  validationSchema={validationSchema}
  onSubmit={async (values) => {
    try {
      const newData = {
        templateId: id,
        ...values,
      };

      const res = await axios.post(
        "https://invitation-server-b26b.onrender.com/invitations",
        newData
      );

      navigate(`/download/${res.data.id}`, {
        state: res.data,
      });

    } catch (err) {
      console.error(err);
    }
  }}
    >

      {({ values, errors, touched })  => (

        <div className="form-page">

          {/* LEFT FORM */}

          <div className="form-section">

            <h2>Invitation Details</h2>

            <Form>

              <Field name="bride" placeholder="Bride Name" />
              {touched.bride && errors.bride && (
  <p style={{ color: "red" }}>{errors.bride}</p>
)}
              <Field name="groom" placeholder="Groom Name" />
              {touched.groom && errors.groom && <p style={{ color: "red" }}>{errors.groom}</p>}
              <Field type="date" name="date" />
              {touched.date && errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
              <Field type="time" name="time" />
              {touched.time && errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
              <Field name="venue" placeholder="Venue" />
               {touched.venue && errors.venue && <p style={{ color: "red" }}>{errors.venue}</p>}
              <button
                type="submit"
              >
                Finish
              </button>

            </Form>

          </div>

          {/* RIGHT PREVIEW */}

          <div className="preview-section">
            {id === 1 && <Template1 data={values} />}
            {id === 2 && <Template2 data={values} />}
            {id === 3 && <Template3 data={values} />}
            {id === 4 && <Template4 data={values} />}
            {id === 5 && <Template5 data={values} />}
            {id === 6 && <Template6 data={values} />}

          </div>

        </div>

      )}

    </Formik>

  );
}

export default FormPage;