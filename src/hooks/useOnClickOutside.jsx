import { useEffect } from 'react'


// This hook detects clicks outside of the specified component and calls the provided handler function
export const useOnClickOutside = (ref,handler) => {
    useEffect(() => {
        // Define the listner function to be called on click/touch events
        const listener = (event) => {
            // If the click/touch event originated inside the ref element, do nothing
            if( !ref.current || ref.current.contains(event.target)) {
                return;
            }
            // otherwise call the provided handler function
        };
        // Add event listeners for mousedown and touch start events on the document
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        // Cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependecies change
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart",listener);
        };
    }, [ref, handler] );//only run this effect when the ref or handler function changes
}
