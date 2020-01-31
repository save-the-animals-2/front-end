import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function CampaignForm({ errors, touched, values, status }) {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    status && setCampaign(campaign => [...campaign, status]);
    console.log(campaign);
  }, [status]);

  return (
    <div>
      <Form>
        <h1>Campaign Form</h1>
        <Field
          type="text"
          name="campaign-title"
          placeholder="Campaign Title"
          value={values.title}
        />
        {touched.title && errors.title && <p>{errors.title}</p>}

        <Field
          component="textarea"
          type="text"
          name="campaign-description"
          placeholder="Campaign Description"
          value={values.description}
        />
        {touched.description && errors.description && (
          <p>{errors.description}</p>
        )}

        <Field
          type="text"
          name="location"
          placeholder="Campaign Location"
          value={values.location}
        />
        {touched.location && errors.location && <p>{errors.location}</p>}

        <Field
          component="select"
          name="endangered-animal"
          value={values.species}
        >
          <option>Choose an Animal</option>
          <option>African Forest Elephant</option>
          <option>African Penguin</option>
          <option>African Wild Dog</option>
          <option>Albatross</option>
          <option>Armadillo</option>
          <option>Asian Elephant</option>
          <option>Asiatic Black Bear</option>
          <option>Axolotl</option>
          <option>Aye Aye</option>
          <option>Bactrian Camel</option>
          <option>Bandicoot</option>
          <option>Bear</option>
          <option>Bengal Tiger</option>
          <option>Blue Whale</option>
          <option>Bonobo</option>
          <option>Brown Bear</option>
          <option>Butterfly Fish</option>
          <option>Chimpanzee</option>
          <option>Chinchilla</option>
          <option>Dhole</option>
          <option>Eastern Lowland Gorilla</option>
          <option>Fin Whale</option>
          <option>Fishing Cat</option>
          <option>Fossa</option>
          <option>Galapagos Penguin</option>
          <option>Galapagos Tortoise</option>
          <option>Giraffe</option>
          <option>Golden Lion Tamarin</option>
          <option>Grizzly Bear</option>
          <option>Honey Bee</option>
          <option>Hummingbird</option>
          <option>Indian Elephant</option>
          <option>Indian Rhinoceros</option>
          <option>Indochinese Tiger</option>
          <option>Indri</option>
        </Field>
        {touched.species && errors.species && <p>{errors.species}</p>}

        <Field
          type="text"
          name="urgency-level"
          placeholder="Urgency Level"
          value={values.urgency_level}
        />
        {touched.urgency_level && errors.urgency_level && (
          <p>{errors.urgency_level}</p>
        )}

        <Field
          type="text"
          name="funding-goal"
          placeholder="Funding Goal"
          value={values.funding_goal}
        />
        {touched.funding_goal && errors.funding_goal && (
          <p>{errors.funding_goal}</p>
        )}

        <Field
          type="date"
          name="deadline"
          placeholder="Deadline"
          value={values.deadline}
        />
        {touched.deadline && errors.deadline && <p>{errors.deadline}</p>}

        <button type="submit">Create Campaign</button>
      </Form>
    </div>
  );
}

const FormikCampaignForm = withFormik({
  mapPropsToValues({ title }) {
    return {
      title: title || '',
      description: '',
      location: '',
      species: '',
      urgency_level: '',
      funding_goal: '',
      deadline: '',
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Please fill this out!'),
    description: Yup.string().required('Please fill this out!'),
    location: Yup.string().required('Please fill this out!'),
    species: Yup.string()
      .oneOf([
        'African Forest Elephant',
        'African Penguin',
        'African Wild Dog',
        'Albatross',
        'Armadillo',
        'Asian Elephant',
        'Asiatic Black Bear',
        'Axolotl',
        'Aye Aye',
        'Bactrian Camel',
        'Bandicoot',
        'Bear',
        'Bengal Tiger',
        'Blue Whale',
        'Bonobo',
        'Brown Bear',
        'Butterfly Fish',
        'Chimpanzee',
        'Chinchilla',
        'Dhole',
        'Eastern Lowland Gorilla',
        'Fin Whale',
        'Fishing Cat',
        'Fossa',
        'Galapagos Penguin',
        'Galapagos Tortoise',
        'Giraffe',
        'Golden Lion Tamarin',
        'Grizzly Bear',
        'Honey Bee',
        'Hummingbird',
        'Indian Elephant',
        'Indian Rhinoceros',
        'Indochinese Tiger',
        'Indri',
      ])
      .required('Please Choose an Animal'),
    urgency_level: '',
    funding_goal: '',
    deadline: '',
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('Submitting form: ', values);

    axios
      .post('', values)
      .then(response => {
        console.log('Success:', response);
        setStatus(response.data);
        resetForm();
      })
      .catch(error => console.log('Error:', error));
  },
})(CampaignForm);
export default FormikCampaignForm;
