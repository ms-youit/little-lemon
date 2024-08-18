import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function BookingForm() {
    const initialValues = {
        date: '',
        people: 0,
        time: '',
    };

    const validation = Yup.object({
        date: Yup.date('You must specify a date').required('The date is required'),
        people: Yup.number().min(1).required('this is a required field'),
        time: Yup.string().required('this field is required'),
    });

    function bookTable(e) {
        e.preventDefault();
    }

    return (
        <section className="booking-form" id="booking-form">
            <div className="container">
                <h2 className="title">
                    Reserve a table
                </h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={bookTable}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <Field required type="date" name="date" />
                                <ErrorMessage name="date" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <Field required type="time" name="time" />
                                <ErrorMessage name="time" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="people">Number of people</label>
                                <Field required type="number" name="people" />
                                <ErrorMessage name="people" component="div" className="error" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}