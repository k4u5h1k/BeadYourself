import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import OAuth2Login from 'react-simple-oauth2-login';

function OAuth(props) {
  const authurl="https://accounts.google.com/o/oauth2/auth"
  const tokenuri="https://oauth2.googleapis.com/token"

  return (
    <OAuth2Login
      authorizationUrl="https://accounts.spotify.com/authorize"
      responseType="token"
      clientId="9822046hvr4lnhi7g07grihpefahy5jb"
      redirectUri="http://localhost:3000/oauth-callback"
      onSuccess={onSuccess}
      onFailure={onFailure}/>
  );
}

export default OAuth;
