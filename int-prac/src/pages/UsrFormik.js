import { Formik, Form, Field, ErrorMessage } from "formik";
import { usrVAlidation } from "./validation";


const UsrFormik = () => {
    const initialState = {
        name: '',
        age: 0,
        password: ''
    }

    return (
        <div>
            <Formik
                initialValues={initialState}
                onSubmit={(values) => console.log(values)}
                validationSchema={usrVAlidation}
            >
                <Form>
                    <Field
                        name='name'
                        type='text'
                        label='name'
                        placeholder='name'
                    />
                    <ErrorMessage name='name' component={'div'} style={{ color: 'red' }} />
                    <Field
                        name='email'
                        type='email'
                        label='email'
                        placeholder='abc@xyz.com'

                    />
                    <ErrorMessage name='email' component={'div'} style={{ color: 'red' }} />

                    <Field
                        name='password'
                        type='password'
                        label='password'
                        placeholder='password'
                    />
                    <ErrorMessage name='password' component={'div'} style={{ color: 'red' }} />
                    <Field
                        type='submit'
                        value='submit'
                    />

                </Form>

            </Formik>
        </div>
    )
}

export default UsrFormik