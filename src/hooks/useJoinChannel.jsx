const useJoinChannel = () => {
  const joinChannel = (channelId) => {
    console.log(`join ${channelId}`);
    // moveChannel(channelId);
  };
  
  return ((channelId) => {
    joinChannel(channelId);
  }); 
};

export default useJoinChannel;
