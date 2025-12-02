import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { canAccessPage, getLastUnlockedPage } from "@/core/utils/routeGuard";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [shouldRedirect, setShouldRedirect] = useState(null);

  //Verify when the employee has loaded
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      if (!canAccessPage(path)) {
        const last = getLastUnlockedPage();
        setShouldRedirect(last);
      }
    }
  }, [isLoaded, isSignedIn, path]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate(shouldRedirect, { replace: true });
    }
  }, [shouldRedirect, navigate]);


  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/" />;
  }

  if (shouldRedirect) return null;

  return children;
};

export default ProtectedRoute;
