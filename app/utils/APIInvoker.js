import React from "react";

const APIInvoker = (url, onCallBack, failCallBack) => {
  return invoke(url, onCallBack, failCallBack);
};

const invoke = (url, onCallBack, failCallBack) => {
  fetch(`https://minitwitterapi.reactiveprogramming.io${url}`)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      if (responseData.ok) {
        onCallBack(responseData);
      } else {
        failCallBack(responseData);
      }
    });
};

expot default new APIInvoker()