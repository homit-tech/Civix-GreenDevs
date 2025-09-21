import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const useProfileStatus = () => {
  const { user, isSignedIn } = useUser();
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const checkProfileStatus = async () => {
    if (!isSignedIn || !user) {
      setIsLoading(false);
      return;
    }

    try {
      console.log('Fetching profile data for user:', user.id);
      // The API endpoint expects clerkUserId, not just id
      const response = await fetch(`http://localhost:5000/api/profile/${user.id}`, {
        credentials: 'include',
      });
      
      console.log('Profile API response status:', response.status);
      
      if (response.ok) {
        // Ensure we can parse JSON; guard against HTML error pages
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('Invalid response format for profile status');
        }
        const data = await response.json();
        console.log('Profile data received:', data);
        setProfileData(data);
        setIsProfileComplete(Boolean(data.isProfileComplete));
      } else if (response.status === 404) {
        // User doesn't exist in our database yet
        console.log('User profile not found (404)');
        setIsProfileComplete(false);
        setProfileData(null);
      } else {
        console.error('Failed to fetch profile status, status code:', response.status);
        setIsProfileComplete(false);
      }
    } catch (error) {
      console.error('Error checking profile status:', error);
      setIsProfileComplete(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkProfileStatus();
  }, [isSignedIn, user]);

  return {
    isProfileComplete,
    isLoading,
    profileData,
    refetch: () => {
      setIsLoading(true);
      // Trigger a re-fetch by changing the dependency
      checkProfileStatus();
    }
  };
};

export default useProfileStatus;
