const errorTexts = {
  unableToConnect: (link: string) =>
    `Unable to connect to the server to receive quotes data. Perhaps the problem is that you have a blocked resource. To solve the issue, go to the following link: ${link} and give access to go to the resource. Then try loading the data again.`,
};

export default errorTexts;
