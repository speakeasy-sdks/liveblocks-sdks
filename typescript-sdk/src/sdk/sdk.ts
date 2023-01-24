import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://api.liveblocks.io/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class Liveblocks {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "0.21.0";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * deleteRoomsRoomId - Delete room
   *
   * Deletes a room. A deleted room is no longer accessible from the API or the dashboard and it cannot be restored. 
   * 
   * 
  **/
  deleteRoomsRoomId(
    req: operations.DeleteRoomsRoomIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoomsRoomIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoomsRoomIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRoomsRoomIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteRoomsRoomIdStorage - Delete storage
   *
   * Deletes all elements of the room storage.
  **/
  deleteRoomsRoomIdStorage(
    req: operations.DeleteRoomsRoomIdStorageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoomsRoomIdStorageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoomsRoomIdStorageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/storage", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRoomsRoomIdStorageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRooms - Get rooms
   *
   * Returns a list of your rooms. The rooms are returned sorted by creation date, from newest to oldest. You can filter rooms by metadata, users accesses and groups accesses.
   * 
   * There is a pagination system where the next page URL is returned in the response as `nextPage`.
   * You can also limit the number of rooms by query.
   * 
   * Filtering by metadata works by giving key values like `metadata.color=red`. Of course you can combine multiple metadata clauses to refine the response like `metadata.color=red&metadata.type=text`. Notice here the operator AND is applied between each clauses.
   * 
   * Filtering by groups or userId works by giving a list of groups like `groupIds=marketing,GZo7tQ,product` or/and a userId like `userId=user1`.
   * Notice here the operator OR is applied between each `groupIds` and the `userId`.
   * 
  **/
  getRooms(
    req: operations.GetRoomsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoomsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoomsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rooms";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoomsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getRooms = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoomsRoomId - Get room
   *
   * Get a room by its `id`. 
  **/
  getRoomsRoomId(
    req: operations.GetRoomsRoomIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoomsRoomIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoomsRoomIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoomsRoomIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.room = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoomsRoomIdActiveUsers - Get active users
   *
   * Returns a list of users currently present in the requested room. For better performance, we recommand to call this endpoint every 10 seconds maximum. 
   * Duplicates can happen if a user is in the requested room with multiple browser tabs opened.
  **/
  getRoomsRoomIdActiveUsers(
    req: operations.GetRoomsRoomIdActiveUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoomsRoomIdActiveUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoomsRoomIdActiveUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/active_users", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoomsRoomIdActiveUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.activeUsersResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRoomsRoomIdStorage - Get storage
   *
   * Returns a room storage as JSON.
   * 
   * Some implementation details:
   * Each Liveblocks data structure is represented by a JSON element having two properties:
   * `"liveblocksType": "LiveObject" | "LiveList" | "LiveMap"`
   * `"data"` => contains the nested data structures (children) and data.
   * The root is always a `LiveObject`.
  **/
  getRoomsRoomIdStorage(
    req: operations.GetRoomsRoomIdStorageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRoomsRoomIdStorageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRoomsRoomIdStorageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/storage", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRoomsRoomIdStorageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getRoomsRoomIdStorage200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postAuthorize - Get an access token to enter a room
   *
   * This endpoint lets your application server (= your backend) obtain a token that one of its clients (= your frontend) can use to enter a Liveblocks room. You use this endpoint to implement your own application’s custom authentication endpoint. When making this request, you’ll have to use your secret key.
   * 
   * The body for this POST request lets you declare what user ID the token is for, by means of the `userId` property. This can be whatever internal identifier you use for your user accounts, as long as it uniquely identifies an account. Setting the `userId` is optional if you want to use public rooms, but it is required to enter a private room (because permissions are assigned to specific user IDs). You can also declare which `groupIds` this user belongs to, in case you want to use the group permission system.
   * 
   * Additionally, you can set custom metadata to the token, which will be publicly accessible by other clients, through the `user.info` property. This is useful to store static data like avatar images, or the user's display name.
  **/
  postAuthorize(
    req: operations.PostAuthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthorizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/authorize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAuthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postPublicAuthorize - Get JWT token for WebSocket with with public key
   *
   * This endpoint works with the public key and can be used client side. That means you don't need to implement a dedicated authorization endpoint server side. 
   * The generated JWT token works only with public room (`defaultAccesses: ["room:write"]`).
  **/
  postPublicAuthorize(
    req: operations.PostPublicAuthorizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPublicAuthorizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPublicAuthorizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/public/authorize", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPublicAuthorizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRooms - Create room
   *
   * Create a new room. `id` and `defaultAccesses` are required. 
   * - `defaultAccessess` could be `[]` or `["room:write"]` (private or public). 
   * - `metadata` could be key/value as `string` or `string[]`. `metadata` supports maximum 50 entries. Key length has a limit of 40 characters maximum. Value length has a limit of 256 characters maximum. `metadata` is optional field.
   * - `usersAccesses` could be `[]` or `["room:write"]` for every records. `usersAccesses` can contain 100 ids maximum. Id length has a limit of 40 characters. `usersAccesses` is optional field.
   * - `groupsAccesses` are optional fields.
   * 
  **/
  postRooms(
    req: operations.PostRoomsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoomsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoomsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rooms";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRoomsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.room = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRoomsRoomId - Update room
   *
   * Updates specific properties of a room. It's not necessary to provide the entire room's information. 
   * Setting a property to `null` means to delete this property. For example, if you want to remove access to a specific user without losing other users: 
   * ``{
   *     "usersAccesses": {
   *         "john": null
   *     }
   * }``
   * `defaultAccessess`, `metadata`, `usersAccesses`, `groupsAccesses` can be updated.
   * 
   * - `defaultAccessess` could be `[]` or `["room:write"]` (private or public). 
   * - `metadata` could be key/value as `string` or `string[]`. `metadata` supports maximum 50 entries. Key length has a limit of 40 characters maximum. Value length has a limit of 256 characters maximum. `metadata` is optional field.
   * - `usersAccesses` could be `[]` or `["room:write"]` for every records. `usersAccesses` can contain 100 ids maximum. Id length has a limit of 256 characters. `usersAccesses` is optional field.
   * - `groupsAccesses` could be `[]` or `["room:write"]` for every records. `groupsAccesses` can contain 100 ids maximum. Id length has a limit of 256 characters. `groupsAccesses` is optional field.
   * 
   * 
  **/
  postRoomsRoomId(
    req: operations.PostRoomsRoomIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoomsRoomIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoomsRoomIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRoomsRoomIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.room = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRoomsRoomIdStorage - Initialize storage
   *
   * Initializes a room storage. The room must already exist and have an empty storage.
   * 
   * The format of the request body is the same as what's returned by the get storage endpoint.
   * 
   * For each Liveblocks data structure that you want to create, you need a JSON element having two properties:
   * - "liveblocksType": "LiveObject" | "LiveList" | "LiveMap"
   * - "data" => contains the nested data structures (children) and data.
   * 
   * The root's type can only be LiveObject.
  **/
  postRoomsRoomIdStorage(
    req: operations.PostRoomsRoomIdStorageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRoomsRoomIdStorageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRoomsRoomIdStorageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/rooms/{roomId}/storage", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRoomsRoomIdStorageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postRoomsRoomIdStorage200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}