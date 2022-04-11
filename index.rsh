'reach 0.1';

/**
   * The body of a reach app is an application initialization
   * defines the various participants and views of the DApp as well as sets compilation options.
   * It is finalized with init() and then application begins in a step
   */
  
export const main = Reach.App(() => {

  
  const A = Participant('Creator', {
    // Specify Alice's interact interface here
  });
  const B = Participant('Audience', {
    // Specify Bob's interact interface here
  });
  init();
  // write your program here

  /**
   * A reach step occurs in the continuation of an init statement or commit statement.
   * It represents the actions taken by each of the participants in an application.
   */
});

//A block is a sequence of statements surrounded by braces, i.e. { and }.2

//Each statement affects the meaning of the subsequent statements, which is called its tail. For example, if {X; Y; Z;} is a block, then X's tail is {Y; Z;} and Y's tail is {Z;}.

//Distinct from tails are continuations which include everything after the statement. For example, in { {X; Y;}; Z;}, X's tail is just Y, but its continuation is {Y;}; Z;.

//A return statement returns its value to the surrounding function application.

//A return statement is a terminator statement, so it must have an empty tail.

//A conditional statement may only include a consensus transfer in NOT_FALSE or FALSE if it is within a consensus step, because its statements are in the same context as the conditional statement itself.30

//If one branch of a conditional contains a return, then both must.

// A try statement, written try BLOCK catch (VAR) BLOCK, allows a block of code to execute with a specified handler should an exception be thrown.

/**
 * try {
  throw 10;
  } catch (v) {
  transfer(v).to(A); }
 * 
 */

 /**
  * Reach's types are represented in programs by the following identifiers and constructors: 
  * Null.
  * Bool, which denotes a boolean.
  * UInt, which denotes an unsigned integer. UInt.max is the largest value that may be assigned to a UInt.
  * Int, which denotes a signed integer.
  * FixedPoint, which denotes a fractional number.
  * Bytes(length), which denotes a string of bytes of length at most length. Bytes of different lengths are not compatible; however the shorter bytes may be padded.
  * Digest, which denotes a digest.
  * Address, which denotes an account address.
  * Contract, which denotes the identifying information of a contract
  * 
  * 
  * 
  * Reach has different representations of contracts across connectors. For example, on Algorand a Contract is an Application ID, but on Ethereum it is an Address.
  * 
  * 
  * Token, which denotes a non-network token.
  * 
  * Fun([Domain_0, ..., Domain_N], Range), which denotes a function type, when Domain_i and Range are types. The domain of a function is negative position. The range of a function is positive position.
  * Fun(true, Range), which denotes an unconstrained domain function type, when Range is a type. These functions may only appear in participant interact interfaces.
  * Tuple(Field_0, ..., FieldN), which denotes a tuple. (Refer to Tuples for constructing tuples.)
  * Object({key_0: Type_0, ..., key_N: Type_N}), which denotes an object. (Refer to Objects for constructing objects.)
  * Struct([[key_0, Type_0], ..., [key_N, Type_N]]), which denotes a struct. (Refer to Structs for constructing structs.)
  * Array(Type_0, size), which denotes a statically-sized array. Type_0 must be a type that can exist at runtime (i.e., not a function type.) (Refer to Arrays for constructing arrays.)
  * Data({variant_0: Type_0, ..., variant_N: Type_N}), which denotes a tagged union (or sum type). (Refer to Data for constructing data instances.)
  * Refine(Type_0, Predicate, ?Message), where Predicate is a unary function returning a boolean, which denotes a refinement type, that is instances of Type_0 that satisfy Predicate. When a refinement type appears in a negative position (such as in an is or in the domain of a Fun of a participant interact interface), it introduces an assert; while when it is in a positive position, it introduces an assume. Message is an optional string to display if the predicate fails verification
 */ 