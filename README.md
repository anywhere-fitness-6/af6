# af6

Anywhere Fitness App

1. USER LOGIN PAGE/SIGNUP PAGE - User can create/register as a client and login with the registered credentials.

2. INSTRUCTOR LOGIN PAGE/SIGNUP PAGE - User can create/register as an instructor by entering an additional Auth Code during signup, and can login with the registered credentials.

3. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated client can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`
