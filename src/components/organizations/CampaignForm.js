import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function CampaignForm({ errors, touched, values, status }) {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    status && setCampaign(campaign => [...campaign, status]);
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

        <Field />
      </Form>
    </div>
  );
}
