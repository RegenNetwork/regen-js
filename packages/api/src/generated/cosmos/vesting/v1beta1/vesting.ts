/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { BaseAccount } from '../../../cosmos/auth/v1beta1/auth';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.vesting.v1beta1';

/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  $type: 'cosmos.vesting.v1beta1.BaseVestingAccount';
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: Long;
}

/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  $type: 'cosmos.vesting.v1beta1.ContinuousVestingAccount';
  baseVestingAccount?: BaseVestingAccount;
  startTime: Long;
}

/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  $type: 'cosmos.vesting.v1beta1.DelayedVestingAccount';
  baseVestingAccount?: BaseVestingAccount;
}

/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  $type: 'cosmos.vesting.v1beta1.Period';
  length: Long;
  amount: Coin[];
}

/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  $type: 'cosmos.vesting.v1beta1.PeriodicVestingAccount';
  baseVestingAccount?: BaseVestingAccount;
  startTime: Long;
  vestingPeriods: Period[];
}

/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 */
export interface PermanentLockedAccount {
  $type: 'cosmos.vesting.v1beta1.PermanentLockedAccount';
  baseVestingAccount?: BaseVestingAccount;
}

function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.BaseVestingAccount',
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: Long.ZERO,
  };
}

export const BaseVestingAccount = {
  $type: 'cosmos.vesting.v1beta1.BaseVestingAccount' as const,

  encode(
    message: BaseVestingAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(
        message.baseAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseVestingAccount {
    return {
      $type: BaseVestingAccount.$type,
      baseAccount: isSet(object.baseAccount)
        ? BaseAccount.fromJSON(object.baseAccount)
        : undefined,
      originalVesting: Array.isArray(object?.originalVesting)
        ? object.originalVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      delegatedFree: Array.isArray(object?.delegatedFree)
        ? object.delegatedFree.map((e: any) => Coin.fromJSON(e))
        : [],
      delegatedVesting: Array.isArray(object?.delegatedVesting)
        ? object.delegatedVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      endTime: isSet(object.endTime)
        ? Long.fromString(object.endTime)
        : Long.ZERO,
    };
  },

  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount
        ? BaseAccount.toJSON(message.baseAccount)
        : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined &&
      (obj.endTime = (message.endTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(
    object: I,
  ): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.originalVesting =
      object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedFree =
      object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedVesting =
      object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Long.fromValue(object.endTime)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(BaseVestingAccount.$type, BaseVestingAccount);

function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.ContinuousVestingAccount',
    baseVestingAccount: undefined,
    startTime: Long.ZERO,
  };
}

export const ContinuousVestingAccount = {
  $type: 'cosmos.vesting.v1beta1.ContinuousVestingAccount' as const,

  encode(
    message: ContinuousVestingAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ContinuousVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.startTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContinuousVestingAccount {
    return {
      $type: ContinuousVestingAccount.$type,
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      startTime: isSet(object.startTime)
        ? Long.fromString(object.startTime)
        : Long.ZERO,
    };
  },

  toJSON(message: ContinuousVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContinuousVestingAccount>, I>>(
    object: I,
  ): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(
  ContinuousVestingAccount.$type,
  ContinuousVestingAccount,
);

function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.DelayedVestingAccount',
    baseVestingAccount: undefined,
  };
}

export const DelayedVestingAccount = {
  $type: 'cosmos.vesting.v1beta1.DelayedVestingAccount' as const,

  encode(
    message: DelayedVestingAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DelayedVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelayedVestingAccount {
    return {
      $type: DelayedVestingAccount.$type,
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
    };
  },

  toJSON(message: DelayedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelayedVestingAccount>, I>>(
    object: I,
  ): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DelayedVestingAccount.$type, DelayedVestingAccount);

function createBasePeriod(): Period {
  return {
    $type: 'cosmos.vesting.v1beta1.Period',
    length: Long.ZERO,
    amount: [],
  };
}

export const Period = {
  $type: 'cosmos.vesting.v1beta1.Period' as const,

  encode(
    message: Period,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64() as Long;
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Period {
    return {
      $type: Period.$type,
      length: isSet(object.length) ? Long.fromString(object.length) : Long.ZERO,
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.length !== undefined &&
      (obj.length = (message.length || Long.ZERO).toString());
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
    const message = createBasePeriod();
    message.length =
      object.length !== undefined && object.length !== null
        ? Long.fromValue(object.length)
        : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Period.$type, Period);

function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.PeriodicVestingAccount',
    baseVestingAccount: undefined,
    startTime: Long.ZERO,
    vestingPeriods: [],
  };
}

export const PeriodicVestingAccount = {
  $type: 'cosmos.vesting.v1beta1.PeriodicVestingAccount' as const,

  encode(
    message: PeriodicVestingAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.startTime = reader.int64() as Long;
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeriodicVestingAccount {
    return {
      $type: PeriodicVestingAccount.$type,
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      startTime: isSet(object.startTime)
        ? Long.fromString(object.startTime)
        : Long.ZERO,
      vestingPeriods: Array.isArray(object?.vestingPeriods)
        ? object.vestingPeriods.map((e: any) => Period.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PeriodicVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined &&
      (obj.startTime = (message.startTime || Long.ZERO).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map(e =>
        e ? Period.toJSON(e) : undefined,
      );
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeriodicVestingAccount>, I>>(
    object: I,
  ): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    message.vestingPeriods =
      object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(PeriodicVestingAccount.$type, PeriodicVestingAccount);

function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.PermanentLockedAccount',
    baseVestingAccount: undefined,
  };
}

export const PermanentLockedAccount = {
  $type: 'cosmos.vesting.v1beta1.PermanentLockedAccount' as const,

  encode(
    message: PermanentLockedAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(
        message.baseVestingAccount,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermanentLockedAccount {
    return {
      $type: PermanentLockedAccount.$type,
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
    };
  },

  toJSON(message: PermanentLockedAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PermanentLockedAccount>, I>>(
    object: I,
  ): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined &&
      object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PermanentLockedAccount.$type, PermanentLockedAccount);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
