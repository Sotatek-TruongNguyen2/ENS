// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "../standards/ERC165.sol";
import "../interfaces/IVersionableResolver.sol";

abstract contract ResolverBase is ERC165 {
    mapping(bytes32 => uint64) public recordVersions;

    event VersionChanged(bytes32 indexed node, uint64 newVersion);

    function isAuthorised(bytes32 node) internal view virtual returns (bool);

    modifier authorised(bytes32 node) {
        require(isAuthorised(node));
        _;
    }

    /**
     * Increments the record version associated with an ENS node.
     * May only be called by the owner of that node in the ENS registry.
     * @param node The node to update.
     */
    function clearRecords(bytes32 node) public virtual authorised(node) {
        recordVersions[node]++;
        emit VersionChanged(node, recordVersions[node]);
    }

    function supportsInterface(bytes4 interfaceID)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            interfaceID == type(IVersionableResolver).interfaceId ||
            super.supportsInterface(interfaceID);
    }
}