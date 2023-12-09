const dbx = new Dropbox({ accessToken: 'sl.BrZ6SzcRrPHNFkyIBtySnefZwgxkrMYB0EGYzy8iMFOq8dgK5MllkAbHhCDAVCjdifbJo5CzIcb_hDT_UP8SqqnuqE_WVtn9bWaP9M_RzMairhtpKmWXkddJaXBQevM0TvElEgfUHoqQxRH1ugcG' });
dbx.usersGetCurrentAccount()
 .then(response => {
    console.log(response);
 })
 .catch(error => {
    console.error(error);
 });
