import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../trevor.css';
import api from '../utils/api';

function CampaignForm({ errors, touched, values, status }) {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    status && setCampaign(() => [...campaign, status]);
    console.log(campaign);
  }, [status]);

  return (
    <div>
      <div className="trevor-form-container">
        <Form className="trevor-form">
          <h1>Create new Campaign!</h1>
          <Field
            type="text"
            name="title"
            placeholder="Campaign Title"
            value={values.title}
            className="trevor-input"
          />
          {touched.title && errors.title && <p>{errors.title}</p>}

          <Field
            component="textarea"
            type="text"
            name="description"
            placeholder="Campaign Description"
            value={values.description}
            className="trevor-input"
          />
          {touched.description && errors.description && (
            <p>{errors.description}</p>
          )}

          <Field
            type="text"
            name="location"
            placeholder="Campaign Location"
            value={values.location}
            className="trevor-input"
          />
          {touched.location && errors.location && <p>{errors.location}</p>}

          <Field
            component="select"
            name="species"
            value={values.species}
            className="trevor-input"
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
            name="urgency_level"
            placeholder="Urgency Level"
            value={values.urgency_level}
            className="trevor-input"
          />
          {touched.urgency_level && errors.urgency_level && (
            <p>{errors.urgency_level}</p>
          )}

          <Field
            type="text"
            name="funding_goal"
            placeholder="Funding Goal"
            value={values.funding_goal}
            className="trevor-input"
          />
          {touched.funding_goal && errors.funding_goal && (
            <p>{errors.funding_goal}</p>
          )}

          <Field
            type="date"
            name="deadline"
            placeholder="Deadline"
            value={values.deadline}
            className="trevor-input"
          />
          {touched.deadline && errors.deadline && <p>{errors.deadline}</p>}

          <button className="trevor-button" type="submit">
            Create
          </button>
        </Form>
      </div>
    </div>
  );
}

const FormikCampaignForm = withFormik({
  mapPropsToValues({ campaign }) {
    return {
      title: campaign || '',
      description: '',
      photo_url:
        'https://cms.fauna-flora.org/wp-content/uploads/2017/11/conserving-migrating-raptors-in-western-georgia-2000x1200.jpg',
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

    api()
      .post('/api/campaigns', values)
      .then(response => {
        console.log('Success:', response);
        setStatus(response.data);
        resetForm();
        window.location.reload();
      })
      .catch(error => console.log('Error:', error));
  },
})(CampaignForm);
export default FormikCampaignForm;
