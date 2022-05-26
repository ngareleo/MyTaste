# Music Tastes

Compare spotify music profiles for simmilarities

- The project implements a layered architecture
- The Layers include from top-down

##### Music Tastes Layers

1. Presentation Layer (Flutter and React Application)
2. Data Operation Layer
3. Spotify Interaction Layer
4. Authentication Layer

### Authorization Service

- This service is registered with the Spotify API.
- It handles the keys
- It requests the user token from Spotify and deals with Caching user tokens

### Spotify Interaction Service

The layer above the authorization service

- It interacts with user data and doesn't interact with application keys
- It performs as the waiter for the top-most layer

### Data Operation Service

This layer does the statistics and provides the api for the presentation layers
