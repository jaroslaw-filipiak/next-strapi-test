import React, { useState, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_FORMS = gql`
  query getForms {
    forms {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export default function Test() {
  const { data, error, loading } = useQuery(GET_FORMS);

  if (loading) return <p>loading..</p>;
  if (error) return <p>error...</p>;

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-4 border'>
          {console.log(data)}
          <h2>test component.. </h2>
          <h3>{data.forms.data[0].attributes.name}</h3>
        </div>
      </div>
    </div>
  );
}
