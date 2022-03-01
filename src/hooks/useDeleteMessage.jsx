const useDeleteMessage = () => {
  const deleteMessage = (messageId) => {
    console.log(`delete ${messageId}`);
  };
  
  return ((messageId) => {
    deleteMessage(messageId);
  });
};

export default useDeleteMessage;
