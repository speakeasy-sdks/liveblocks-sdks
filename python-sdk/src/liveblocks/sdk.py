

import requests
from typing import Optional
from liveblocks.models import shared, operations
from . import utils




SERVERS = [
	"https://api.liveblocks.io/v2",
]


class Liveblocks:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "0.21.0"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_rooms_room_id(self, request: operations.DeleteRoomsRoomIDRequest) -> operations.DeleteRoomsRoomIDResponse:
        r"""Delete room
        Deletes a room. A deleted room is no longer accessible from the API or the dashboard and it cannot be restored. 
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoomsRoomIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_rooms_room_id_storage(self, request: operations.DeleteRoomsRoomIDStorageRequest) -> operations.DeleteRoomsRoomIDStorageResponse:
        r"""Delete storage
        Deletes all elements of the room storage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/storage", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoomsRoomIDStorageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_rooms(self, request: operations.GetRoomsRequest) -> operations.GetRoomsResponse:
        r"""Get rooms
        Returns a list of your rooms. The rooms are returned sorted by creation date, from newest to oldest. You can filter rooms by metadata, users accesses and groups accesses.
        
        There is a pagination system where the next page URL is returned in the response as `nextPage`.
        You can also limit the number of rooms by query.
        
        Filtering by metadata works by giving key values like `metadata.color=red`. Of course you can combine multiple metadata clauses to refine the response like `metadata.color=red&metadata.type=text`. Notice here the operator AND is applied between each clauses.
        
        Filtering by groups or userId works by giving a list of groups like `groupIds=marketing,GZo7tQ,product` or/and a userId like `userId=user1`.
        Notice here the operator OR is applied between each `groupIds` and the `userId`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rooms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoomsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRooms])
                res.get_rooms = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_rooms_room_id(self, request: operations.GetRoomsRoomIDRequest) -> operations.GetRoomsRoomIDResponse:
        r"""Get room
        Get a room by its `id`. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoomsRoomIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Room])
                res.room = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_rooms_room_id_active_users(self, request: operations.GetRoomsRoomIDActiveUsersRequest) -> operations.GetRoomsRoomIDActiveUsersResponse:
        r"""Get active users
        Returns a list of users currently present in the requested room. For better performance, we recommand to call this endpoint every 10 seconds maximum. 
        Duplicates can happen if a user is in the requested room with multiple browser tabs opened.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/active_users", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoomsRoomIDActiveUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActiveUsersResponse])
                res.active_users_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_rooms_room_id_storage(self, request: operations.GetRoomsRoomIDStorageRequest) -> operations.GetRoomsRoomIDStorageResponse:
        r"""Get storage
        Returns a room storage as JSON.
        
        Some implementation details:
        Each Liveblocks data structure is represented by a JSON element having two properties:
        `\"liveblocksType\": \"LiveObject\" | \"LiveList\" | \"LiveMap\"`
        `\"data\"` => contains the nested data structures (children) and data.
        The root is always a `LiveObject`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/storage", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoomsRoomIDStorageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRoomsRoomIDStorage200ApplicationJSON])
                res.get_rooms_room_id_storage_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_authorize(self, request: operations.PostAuthorizeRequest) -> operations.PostAuthorizeResponse:
        r"""Get an access token to enter a room
        This endpoint lets your application server (= your backend) obtain a token that one of its clients (= your frontend) can use to enter a Liveblocks room. You use this endpoint to implement your own application’s custom authentication endpoint. When making this request, you’ll have to use your secret key.
        
        The body for this POST request lets you declare what user ID the token is for, by means of the `userId` property. This can be whatever internal identifier you use for your user accounts, as long as it uniquely identifies an account. Setting the `userId` is optional if you want to use public rooms, but it is required to enter a private room (because permissions are assigned to specific user IDs). You can also declare which `groupIds` this user belongs to, in case you want to use the group permission system.
        
        Additionally, you can set custom metadata to the token, which will be publicly accessible by other clients, through the `user.info` property. This is useful to store static data like avatar images, or the user's display name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/authorize", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_public_authorize(self, request: operations.PostPublicAuthorizeRequest) -> operations.PostPublicAuthorizeResponse:
        r"""Get JWT token for WebSocket with with public key
        This endpoint works with the public key and can be used client side. That means you don't need to implement a dedicated authorization endpoint server side. 
        The generated JWT token works only with public room (`defaultAccesses: [\"room:write\"]`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/public/authorize", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPublicAuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_rooms(self, request: operations.PostRoomsRequest) -> operations.PostRoomsResponse:
        r"""Create room
        Create a new room. `id` and `defaultAccesses` are required. 
        - `defaultAccessess` could be `[]` or `[\"room:write\"]` (private or public). 
        - `metadata` could be key/value as `string` or `string[]`. `metadata` supports maximum 50 entries. Key length has a limit of 40 characters maximum. Value length has a limit of 256 characters maximum. `metadata` is optional field.
        - `usersAccesses` could be `[]` or `[\"room:write\"]` for every records. `usersAccesses` can contain 100 ids maximum. Id length has a limit of 40 characters. `usersAccesses` is optional field.
        - `groupsAccesses` are optional fields.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rooms"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRoomsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Room])
                res.room = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_rooms_room_id(self, request: operations.PostRoomsRoomIDRequest) -> operations.PostRoomsRoomIDResponse:
        r"""Update room
        Updates specific properties of a room. It's not necessary to provide the entire room's information. 
        Setting a property to `null` means to delete this property. For example, if you want to remove access to a specific user without losing other users: 
        ``{
            \"usersAccesses\": {
                \"john\": null
            }
        }``
        `defaultAccessess`, `metadata`, `usersAccesses`, `groupsAccesses` can be updated.
        
        - `defaultAccessess` could be `[]` or `[\"room:write\"]` (private or public). 
        - `metadata` could be key/value as `string` or `string[]`. `metadata` supports maximum 50 entries. Key length has a limit of 40 characters maximum. Value length has a limit of 256 characters maximum. `metadata` is optional field.
        - `usersAccesses` could be `[]` or `[\"room:write\"]` for every records. `usersAccesses` can contain 100 ids maximum. Id length has a limit of 256 characters. `usersAccesses` is optional field.
        - `groupsAccesses` could be `[]` or `[\"room:write\"]` for every records. `groupsAccesses` can contain 100 ids maximum. Id length has a limit of 256 characters. `groupsAccesses` is optional field.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRoomsRoomIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Room])
                res.room = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_rooms_room_id_storage(self, request: operations.PostRoomsRoomIDStorageRequest) -> operations.PostRoomsRoomIDStorageResponse:
        r"""Initialize storage
        Initializes a room storage. The room must already exist and have an empty storage.
        
        The format of the request body is the same as what's returned by the get storage endpoint.
        
        For each Liveblocks data structure that you want to create, you need a JSON element having two properties:
        - \"liveblocksType\": \"LiveObject\" | \"LiveList\" | \"LiveMap\"
        - \"data\" => contains the nested data structures (children) and data.
        
        The root's type can only be LiveObject.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rooms/{roomId}/storage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRoomsRoomIDStorageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostRoomsRoomIDStorage200ApplicationJSON])
                res.post_rooms_room_id_storage_200_application_json_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    