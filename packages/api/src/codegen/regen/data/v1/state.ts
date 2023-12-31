import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** DataID stores a compact data ID and its full IRI. */
export interface DataID {
  /** id is the compact automatically-generated data ID. */
  id: Uint8Array;
  /** iri is the IRI of the data which contains its full ContentHash. */
  iri: string;
}
export interface DataIDProtoMsg {
  typeUrl: "/regen.data.v1.DataID";
  value: Uint8Array;
}
/** DataID stores a compact data ID and its full IRI. */
export interface DataIDAmino {
  /** id is the compact automatically-generated data ID. */
  id: Uint8Array;
  /** iri is the IRI of the data which contains its full ContentHash. */
  iri: string;
}
export interface DataIDAminoMsg {
  type: "/regen.data.v1.DataID";
  value: DataIDAmino;
}
/** DataID stores a compact data ID and its full IRI. */
export interface DataIDSDKType {
  id: Uint8Array;
  iri: string;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchor {
  /** id is the compact data ID. */
  id: Uint8Array;
  /**
   * timestamp is the anchor timestamp for this object - the time at which
   * it was first known to the blockchain.
   */
  timestamp: Timestamp;
}
export interface DataAnchorProtoMsg {
  typeUrl: "/regen.data.v1.DataAnchor";
  value: Uint8Array;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchorAmino {
  /** id is the compact data ID. */
  id: Uint8Array;
  /**
   * timestamp is the anchor timestamp for this object - the time at which
   * it was first known to the blockchain.
   */
  timestamp?: TimestampAmino;
}
export interface DataAnchorAminoMsg {
  type: "/regen.data.v1.DataAnchor";
  value: DataAnchorAmino;
}
/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchorSDKType {
  id: Uint8Array;
  timestamp: TimestampSDKType;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestor {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** attestor is the account address of the attestor. */
  attestor: Uint8Array;
  /** timestamp is the time at which the attestor signed this data object. */
  timestamp: Timestamp;
}
export interface DataAttestorProtoMsg {
  typeUrl: "/regen.data.v1.DataAttestor";
  value: Uint8Array;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestorAmino {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** attestor is the account address of the attestor. */
  attestor: Uint8Array;
  /** timestamp is the time at which the attestor signed this data object. */
  timestamp?: TimestampAmino;
}
export interface DataAttestorAminoMsg {
  type: "/regen.data.v1.DataAttestor";
  value: DataAttestorAmino;
}
/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestorSDKType {
  id: Uint8Array;
  attestor: Uint8Array;
  timestamp: TimestampSDKType;
}
/** Resolver describes a data resolver. */
export interface Resolver {
  /** id is the ID of the resolver. */
  id: Long;
  /** url is the URL of the resolver. */
  url: string;
  /**
   * manager is the bytes address of the resolver manager who is allowed
   * to make calls to Msg/RegisterResolver for this resolver.
   */
  manager: Uint8Array;
}
export interface ResolverProtoMsg {
  typeUrl: "/regen.data.v1.Resolver";
  value: Uint8Array;
}
/** Resolver describes a data resolver. */
export interface ResolverAmino {
  /** id is the ID of the resolver. */
  id: string;
  /** url is the URL of the resolver. */
  url: string;
  /**
   * manager is the bytes address of the resolver manager who is allowed
   * to make calls to Msg/RegisterResolver for this resolver.
   */
  manager: Uint8Array;
}
export interface ResolverAminoMsg {
  type: "/regen.data.v1.Resolver";
  value: ResolverAmino;
}
/** Resolver describes a data resolver. */
export interface ResolverSDKType {
  id: Long;
  url: string;
  manager: Uint8Array;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolver {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** resolver_id is the ID of the resolver. */
  resolverId: Long;
}
export interface DataResolverProtoMsg {
  typeUrl: "/regen.data.v1.DataResolver";
  value: Uint8Array;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolverAmino {
  /** id is the compact data ID. */
  id: Uint8Array;
  /** resolver_id is the ID of the resolver. */
  resolver_id: string;
}
export interface DataResolverAminoMsg {
  type: "/regen.data.v1.DataResolver";
  value: DataResolverAmino;
}
/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolverSDKType {
  id: Uint8Array;
  resolver_id: Long;
}
function createBaseDataID(): DataID {
  return {
    id: new Uint8Array(),
    iri: ""
  };
}
export const DataID = {
  encode(message: DataID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.iri !== "") {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataID {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: DataID): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: Partial<DataID>): DataID {
    const message = createBaseDataID();
    message.id = object.id ?? new Uint8Array();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: DataIDAmino): DataID {
    return {
      id: object.id,
      iri: object.iri
    };
  },
  toAmino(message: DataID): DataIDAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.iri = message.iri;
    return obj;
  },
  fromAminoMsg(object: DataIDAminoMsg): DataID {
    return DataID.fromAmino(object.value);
  },
  fromProtoMsg(message: DataIDProtoMsg): DataID {
    return DataID.decode(message.value);
  },
  toProto(message: DataID): Uint8Array {
    return DataID.encode(message).finish();
  },
  toProtoMsg(message: DataID): DataIDProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataID",
      value: DataID.encode(message).finish()
    };
  }
};
function createBaseDataAnchor(): DataAnchor {
  return {
    id: new Uint8Array(),
    timestamp: undefined
  };
}
export const DataAnchor = {
  encode(message: DataAnchor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataAnchor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataAnchor {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: DataAnchor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial(object: Partial<DataAnchor>): DataAnchor {
    const message = createBaseDataAnchor();
    message.id = object.id ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: DataAnchorAmino): DataAnchor {
    return {
      id: object.id,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },
  toAmino(message: DataAnchor): DataAnchorAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataAnchorAminoMsg): DataAnchor {
    return DataAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: DataAnchorProtoMsg): DataAnchor {
    return DataAnchor.decode(message.value);
  },
  toProto(message: DataAnchor): Uint8Array {
    return DataAnchor.encode(message).finish();
  },
  toProtoMsg(message: DataAnchor): DataAnchorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataAnchor",
      value: DataAnchor.encode(message).finish()
    };
  }
};
function createBaseDataAttestor(): DataAttestor {
  return {
    id: new Uint8Array(),
    attestor: new Uint8Array(),
    timestamp: undefined
  };
}
export const DataAttestor = {
  encode(message: DataAttestor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.attestor.length !== 0) {
      writer.uint32(18).bytes(message.attestor);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataAttestor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAttestor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.attestor = reader.bytes();
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataAttestor {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      attestor: isSet(object.attestor) ? bytesFromBase64(object.attestor) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: DataAttestor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.attestor !== undefined && (obj.attestor = base64FromBytes(message.attestor !== undefined ? message.attestor : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial(object: Partial<DataAttestor>): DataAttestor {
    const message = createBaseDataAttestor();
    message.id = object.id ?? new Uint8Array();
    message.attestor = object.attestor ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },
  fromAmino(object: DataAttestorAmino): DataAttestor {
    return {
      id: object.id,
      attestor: object.attestor,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined
    };
  },
  toAmino(message: DataAttestor): DataAttestorAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.attestor = message.attestor;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataAttestorAminoMsg): DataAttestor {
    return DataAttestor.fromAmino(object.value);
  },
  fromProtoMsg(message: DataAttestorProtoMsg): DataAttestor {
    return DataAttestor.decode(message.value);
  },
  toProto(message: DataAttestor): Uint8Array {
    return DataAttestor.encode(message).finish();
  },
  toProtoMsg(message: DataAttestor): DataAttestorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataAttestor",
      value: DataAttestor.encode(message).finish()
    };
  }
};
function createBaseResolver(): Resolver {
  return {
    id: Long.UZERO,
    url: "",
    manager: new Uint8Array()
  };
}
export const Resolver = {
  encode(message: Resolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.manager.length !== 0) {
      writer.uint32(26).bytes(message.manager);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Resolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.manager = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Resolver {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      url: isSet(object.url) ? String(object.url) : "",
      manager: isSet(object.manager) ? bytesFromBase64(object.manager) : new Uint8Array()
    };
  },
  toJSON(message: Resolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.url !== undefined && (obj.url = message.url);
    message.manager !== undefined && (obj.manager = base64FromBytes(message.manager !== undefined ? message.manager : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Resolver>): Resolver {
    const message = createBaseResolver();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.url = object.url ?? "";
    message.manager = object.manager ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResolverAmino): Resolver {
    return {
      id: Long.fromString(object.id),
      url: object.url,
      manager: object.manager
    };
  },
  toAmino(message: Resolver): ResolverAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.url = message.url;
    obj.manager = message.manager;
    return obj;
  },
  fromAminoMsg(object: ResolverAminoMsg): Resolver {
    return Resolver.fromAmino(object.value);
  },
  fromProtoMsg(message: ResolverProtoMsg): Resolver {
    return Resolver.decode(message.value);
  },
  toProto(message: Resolver): Uint8Array {
    return Resolver.encode(message).finish();
  },
  toProtoMsg(message: Resolver): ResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.Resolver",
      value: Resolver.encode(message).finish()
    };
  }
};
function createBaseDataResolver(): DataResolver {
  return {
    id: new Uint8Array(),
    resolverId: Long.UZERO
  };
}
export const DataResolver = {
  encode(message: DataResolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (!message.resolverId.isZero()) {
      writer.uint32(16).uint64(message.resolverId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.resolverId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataResolver {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      resolverId: isSet(object.resolverId) ? Long.fromValue(object.resolverId) : Long.UZERO
    };
  },
  toJSON(message: DataResolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.resolverId !== undefined && (obj.resolverId = (message.resolverId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<DataResolver>): DataResolver {
    const message = createBaseDataResolver();
    message.id = object.id ?? new Uint8Array();
    message.resolverId = object.resolverId !== undefined && object.resolverId !== null ? Long.fromValue(object.resolverId) : Long.UZERO;
    return message;
  },
  fromAmino(object: DataResolverAmino): DataResolver {
    return {
      id: object.id,
      resolverId: Long.fromString(object.resolver_id)
    };
  },
  toAmino(message: DataResolver): DataResolverAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.resolver_id = message.resolverId ? message.resolverId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DataResolverAminoMsg): DataResolver {
    return DataResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: DataResolverProtoMsg): DataResolver {
    return DataResolver.decode(message.value);
  },
  toProto(message: DataResolver): Uint8Array {
    return DataResolver.encode(message).finish();
  },
  toProtoMsg(message: DataResolver): DataResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.DataResolver",
      value: DataResolver.encode(message).finish()
    };
  }
};