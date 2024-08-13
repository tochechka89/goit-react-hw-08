import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './RegistrationForm.module.css'
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    password: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});

export default function RegistrationForm() {

    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label className={css.label}>Username</label>
                    <Field type='text' name='name' />
                    <ErrorMessage name='name' component='span' />
                </div>
                <div className={css.formGroup}>
                    <label className={css.label}>Email</label>
                    <Field type='text' name='email' />
                    <ErrorMessage name='email' component='span' />
                </div>
                <div className={css.formGroup}>
                    <label className={css.label}>Password</label>
                    <Field type='password' name='password' />
                    <ErrorMessage name='password' component='span' />
                </div>
                <button type="submit" className={css.btn}>Sign In</button>
            </Form>
        </Formik>
    )
}