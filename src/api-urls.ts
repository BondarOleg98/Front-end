import {environment} from './environments/environment';

export const apiUrls = {
  AUTH_LOGIN_URL: environment.BASE_URL + '/auth/login',
  AUTH_REGISTER_URL: environment.BASE_URL + '/auth/register',
  AUTH_ACTIVATION_URL: environment.BASE_URL + '/auth/activate/',
  API_PROFILE: environment.BASE_URL + '/api/profile',
  API_ANNOUNCEMENTS: environment.BASE_URL + '/api/announcements/',
  AUTH_RECOVER_LINK_URL: environment.BASE_URL + '/auth/recovery-link/',
  AUTH_RECOVER_PASS_URL: environment.BASE_URL + '/auth/recover/',
  API_FILE_DOWNLOAD: environment.BASE_URL + '/api/file/download/',
  API_FILE_IMAGE: environment.BASE_URL + '/api/file/image/',
  API_BOOK: environment.BASE_URL + '/api/book-by-id/',
  API_BOOKS: environment.BASE_URL + '/api/books',
  API_BOOK_INFO: environment.BASE_URL + '/api/book',
  API_BOOK_CREATE: environment.BASE_URL + '/api/book',
  API_BOOK_REVIEW: environment.BASE_URL + '/api/book-review',
  API_USERS_BOOKS: environment.BASE_URL + '/api/users-book',
  API_GENRES: environment.BASE_URL + '/api/genres/',
  API_GENRES_URL: {
    SEARCH_BY_NAME_SUBSTRING: environment.BASE_URL + '/api/genres/searchByNameContains',
    SEARCH_PART_BY_NAME_SUBSTRING: environment.BASE_URL + '/api/genres/searchPartByNameContains'
  },
  API_AUTHORS: environment.BASE_URL + '/api/authors',
  API_AUTHORS_URL: {
    FIND_URL: environment.BASE_URL + '/api/authors/searchByNameContains',
    FIND_PART_URL: environment.BASE_URL + '/api/authors/searchPartByNameContains'
  },
  API_USERS: {
    SEARCH_USERS_URL: environment.BASE_URL + '/api/profile/search'
  },
  API_BOOK_URL: {
    FIND_BY_ID: environment.BASE_URL + '/api/book-by-id/'
  },
  API_ACTIVITIES: {
    GET_LAST_ACTIVITIES: environment.BASE_URL + '/api/activity/lastFriendActivities'
  },
  API_FRIENDS: {
    API_FRIENDS_STATUS: environment.BASE_URL + '/api/friends/getFriendInfo',
    API_FRIEND_REQUEST: environment.BASE_URL + '/api/friends/friendRequest',
    API_GET_FRIENDS: environment.BASE_URL + '/api/friends/',
    ACCEPT_FRIEND_REQUEST: environment.BASE_URL + '/api/friend/friendRequest/accept/',
    DECLINE_FRIEND_REQUEST: environment.BASE_URL + '/api/friend/friendRequest/decline/',
    API_FRIEND_INVITATION_STATUS: environment.BASE_URL + '/api/friends/friendRequestStatus'
  },
  API_SETTINGS: environment.BASE_URL + '/api/settings',
  API_REVIEW: environment.BASE_URL + '/api/book-review',
  API_BOOK_TITLE_BY_ID: environment.BASE_URL + '/api/book-title/',
  API_PUBLISHED_BOOK_OVERVIEW: environment.BASE_URL + '/api/book-overviews/published-by-book/',
  API_BOOK_OVERVIEWS_BY_BOOK: environment.BASE_URL + '/api/book-overviews/by-book/',
  API_PUBLISHED_ANNOUNCEMENTS: environment.BASE_URL + '/api/announcements/published/',
  API_GET_PUBLISHED_ANNOUNCEMENT_BY_DATE: environment.BASE_URL + '/api/announcements/date/',
  API_OVERVIEWS: environment.BASE_URL + '/api/book-overviews/',
  API_REVIEWS: environment.BASE_URL + '/api/book-review/',
  API_CREATE_ADMIN_MODERATOR: environment.BASE_URL + '/admins/create',
  API_DELETE_ADMIN_MODERATOR: environment.BASE_URL + '/admins/delete',
  API_GET_ADMIN_MODERATOR: environment.BASE_URL + '/admins',
  API_UPDATE_ADMIN_MODERATOR: environment.BASE_URL + '/admins/update',
  ADMIN_MODERATOR_PUBLISH_OVERVIEW: environment.BASE_URL + '/api/book-overviews/publish/',
  ADMIN_MODERATOR_PUBLISH_ANNOUNCEMENTS: environment.BASE_URL + '/api/announcements/publish/',
  ADMIN_MODERATOR_PUBLISH_REVIEW: environment.BASE_URL + '/api/book-review/publish/',
  ADMIN_MODERATOR_UNPUBLISHED_ANNOUNCEMENTS: environment.BASE_URL + '/api/announcements/unpublish/',
  ADMIN_MODERATOR_UNPUBLISHED_OVERVIEW: environment.BASE_URL + '/api/book-overviews/unpublish/',
  ADMIN_MODERATOR_UNPUBLISHED_REVIEW: environment.BASE_URL + '/api/book-review/unpublish/',
  API_NOTIFICATION: environment.BASE_URL + '/api/notifications/',
  API_NOTIFICATION_COUNT: environment.BASE_URL + '/api/notifications/count',
  API_RECOMMENDATIONS: environment.BASE_URL + '/api/books-recommendations/get/',
  API_PREPARE_RECOMMENDATIONS: environment.BASE_URL + '/api/books-recommendations/prepare/',
  API_ADD_SEARCHING_HISTORIES: environment.BASE_URL + '/api/searching-history/add',
  API_CHAT: {
    API_SOCKET: environment.BASE_URL + '/ws',
    API_SEND: environment.BASE_URL + '/api/ws',
    API_SEND_GROUP: environment.BASE_URL + '/api/ws/group',
    API_GET_MESSAGES: environment.BASE_URL + '/api/ws/',
    API_CHAT_CREATE: environment.BASE_URL + '/api/ws/create',
    API_GET_CHAT: environment.BASE_URL + '/api/ws/getChat',
    API_GROUP_CHAT_CREATE: environment.BASE_URL + '/api/ws/create/groupChat',
    API_GET_GROUP_MESSAGES: environment.BASE_URL + '/api/ws/getGroupMessages',
    API_GET_GROUP_CHATS: environment.BASE_URL + '/api/ws/getGroupChats',
    API_GET_CHAT_USERS: environment.BASE_URL + '/api/ws/getChatUsers',
    API_CHAT_ADD_USER: environment.BASE_URL + '/api/ws/addChatUser'
  },
  API_USERS_ID: environment.BASE_URL + '/api/users/',
  API_ACHIEVEMENT: {
    API: environment.BASE_URL + '/api/achievement',
    FIND_BY_USER_ID: environment.BASE_URL + '/api/achievement/user/',
  },
  WEBSOCKET: environment.BASE_URL + '/ws'
};
