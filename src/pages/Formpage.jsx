import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import Template4 from "../components/Template4";
import Template5 from "../components/Template5";
import Template6 from "../components/Template6";
import "../styles/FormPage.css";

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
    >

      {({ values }) => (

        <div className="form-page">

          {/* LEFT FORM */}

          <div className="form-section">

            <h2>Invitation Details</h2>

            <Form>

              <Field name="bride" placeholder="Bride Name" />
              <Field name="groom" placeholder="Groom Name" />
              <Field type="date" name="date" />
              <Field type="time" name="time" />
              <Field name="venue" placeholder="Venue" />

              <button
                type="button"
                onClick={() =>
                  navigate("/download", {
                    state: {
                      templateId: id,
                      ...values
                    }
                  })
                }
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