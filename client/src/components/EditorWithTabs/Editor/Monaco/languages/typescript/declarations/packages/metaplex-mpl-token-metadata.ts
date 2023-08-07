import { declareFullModule } from "../helper";

export default function declareMetaplexMplTokenMetadata() {
  /* ------------------ Begin @metaplex-foundation/mpl-token-metadata ------------------ */
  declareFullModule(
    "@metaplex-foundation/mpl-token-metadata",
    "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/index.d.ts",
    [
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/old-index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/custom/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/custom/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/custom/metadata-deserializer.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/custom/metadata-deserializer.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/custom/token-record-deserializer.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/custom/token-record-deserializer.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/errors.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/errors.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/CollectionAuthorityRecord.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/CollectionAuthorityRecord.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/Edition.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/Edition.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/EditionMarker.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/EditionMarker.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/EditionMarkerV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/EditionMarkerV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MasterEditionV1.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MasterEditionV1.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MasterEditionV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MasterEditionV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/Metadata.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/Metadata.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MetadataDelegateRecord.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/MetadataDelegateRecord.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/ReservationListV1.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/ReservationListV1.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/ReservationListV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/ReservationListV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/TokenOwnedEscrow.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/TokenOwnedEscrow.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/TokenRecord.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/TokenRecord.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/UseAuthorityRecord.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/UseAuthorityRecord.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/accounts/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/errors/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/errors/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ApproveCollectionAuthority.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ApproveCollectionAuthority.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ApproveUseAuthority.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ApproveUseAuthority.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BubblegumSetCollectionSize.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BubblegumSetCollectionSize.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Burn.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Burn.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BurnEditionNft.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BurnEditionNft.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BurnNft.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/BurnNft.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CloseEscrowAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CloseEscrowAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Collect.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Collect.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ConvertMasterEditionV1ToV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ConvertMasterEditionV1ToV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Create.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Create.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateEscrowAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateEscrowAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMasterEdition.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMasterEdition.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMasterEditionV3.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMasterEditionV3.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccountV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccountV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccountV3.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/CreateMetadataAccountV3.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Delegate.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Delegate.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedCreateMasterEdition.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedCreateMasterEdition.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedCreateReservationList.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedCreateReservationList.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintNewEditionFromMasterEditionViaPrintingToken.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintNewEditionFromMasterEditionViaPrintingToken.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintPrintingTokens.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintPrintingTokens.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintPrintingTokensViaToken.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedMintPrintingTokensViaToken.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedSetReservationList.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/DeprecatedSetReservationList.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/FreezeDelegatedAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/FreezeDelegatedAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Lock.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Lock.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Migrate.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Migrate.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Mint.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Mint.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/MintNewEditionFromMasterEditionViaToken.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/MintNewEditionFromMasterEditionViaToken.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/MintNewEditionFromMasterEditionViaVaultProxy.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/MintNewEditionFromMasterEditionViaVaultProxy.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Print.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Print.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/PuffMetadata.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/PuffMetadata.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RemoveCreatorVerification.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RemoveCreatorVerification.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Revoke.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Revoke.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RevokeCollectionAuthority.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RevokeCollectionAuthority.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RevokeUseAuthority.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/RevokeUseAuthority.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetAndVerifyCollection.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetAndVerifyCollection.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetAndVerifySizedCollectionItem.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetAndVerifySizedCollectionItem.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetCollectionSize.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetCollectionSize.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetTokenStandard.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SetTokenStandard.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SignMetadata.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/SignMetadata.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ThawDelegatedAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/ThawDelegatedAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Transfer.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Transfer.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/TransferOutOfEscrow.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/TransferOutOfEscrow.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Unlock.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Unlock.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Unverify.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Unverify.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UnverifyCollection.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UnverifyCollection.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UnverifySizedCollectionItem.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UnverifySizedCollectionItem.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Update.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Update.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdateMetadataAccount.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdateMetadataAccount.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdateMetadataAccountV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdateMetadataAccountV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdatePrimarySaleHappenedViaToken.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/UpdatePrimarySaleHappenedViaToken.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Use.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Use.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Utilize.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Utilize.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Verify.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/Verify.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/VerifyCollection.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/VerifyCollection.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/VerifySizedCollectionItem.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/VerifySizedCollectionItem.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/instructions/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ApproveUseAuthorityArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ApproveUseAuthorityArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AssetData.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AssetData.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AuthorityType.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AuthorityType.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AuthorizationData.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/AuthorizationData.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/BurnArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/BurnArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Collection.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Collection.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionDetails.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionDetails.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionDetailsToggle.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionDetailsToggle.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionToggle.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CollectionToggle.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateMasterEditionArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateMasterEditionArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateMetadataAccountArgsV3.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/CreateMetadataAccountArgsV3.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Creator.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Creator.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Data.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Data.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/DataV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/DataV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/DelegateArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/DelegateArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/EscrowAuthority.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/EscrowAuthority.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Key.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Key.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/LeafInfo.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/LeafInfo.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/LockArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/LockArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MetadataDelegateRole.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MetadataDelegateRole.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MigrationType.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MigrationType.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MintArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MintArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MintNewEditionFromMasterEditionViaTokenArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/MintNewEditionFromMasterEditionViaTokenArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Payload.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Payload.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PayloadKey.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PayloadKey.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PayloadType.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PayloadType.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PrintArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PrintArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PrintSupply.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/PrintSupply.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ProgrammableConfig.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ProgrammableConfig.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Reservation.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Reservation.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ReservationV1.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/ReservationV1.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/RevokeArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/RevokeArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/RuleSetToggle.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/RuleSetToggle.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/SeedsVec.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/SeedsVec.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/SetCollectionSizeArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/SetCollectionSizeArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenDelegateRole.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenDelegateRole.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenStandard.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenStandard.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenState.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TokenState.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TransferArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TransferArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TransferOutOfEscrowArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/TransferOutOfEscrowArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UnlockArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UnlockArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UpdateArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UpdateArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UpdateMetadataAccountArgsV2.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UpdateMetadataAccountArgsV2.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UseArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UseArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UseMethod.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UseMethod.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Uses.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/Uses.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UsesToggle.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UsesToggle.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UtilizeArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/UtilizeArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/VerificationArgs.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/VerificationArgs.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/generated/types/index.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/generated/types/index.d.ts"),
      ],
      [
        "node_modules/metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.d.ts",
        require("/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/mpl-token-metadata.d.ts"),
      ],
    ]
  );
  /* ------------------ End @metaplex-foundation/mpl-token-metadata ------------------ */
}
